import dbConnect from "@/lib/dbConnect";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);

        const page = Math.max(Number(searchParams.get("page")) || 1, 1);
        const limit = Math.max(Number(searchParams.get("limit")) || 10, 1);

        const category = searchParams.get("category");
        const tag = searchParams.get("tag");
        const featured = searchParams.get("featured");
        const search = searchParams.get("search");
        const status = searchParams.get("status"); // "published" | "draft"

        const query = {};

        if (category) {
            query.category = category;
        }

        if (tag) {
            query.tags = tag;
        }

        if (featured !== null) {
            query.featured = featured === "true";
        }

        if (status === "published") {
            query.isPublished = true;
        }

        if (status === "draft") {
            query.isPublished = false;
        }

        if (search) {
            query.$or = [
                {
                    title: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    excerpt: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    category: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    tags: {
                        $regex: search,
                        $options: "i",
                    },
                },
            ];
        }

        const collection = dbConnect("blog");

        const totalBlogs = await collection.countDocuments(query);
        const totalPages = Math.ceil(totalBlogs / limit);

        const blogs = await collection
            .find(query)
            .project({
                content: 0,
            })
            .sort({
                createdAt: -1,
            })
            .skip((page - 1) * limit)
            .limit(limit)
            .toArray();

        return Response.json({
            blogs,
            pagination: {
                currentPage: page,
                totalPages,
                totalBlogs,
                limit,
                hasPrevPage: page > 1,
                hasNextPage: page < totalPages,
            },
        });

    } catch (error) {
        return Response.json(
            {
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}