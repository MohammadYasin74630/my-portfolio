import dbConnect from "@/lib/dbConnect";


// Get all blogs
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);

        const page = Math.max(Number(searchParams.get("page")) || 1, 1);
        const limit = Math.max(Number(searchParams.get("limit")) || 10, 1);

        const category = searchParams.get("category");
        const tag = searchParams.get("tag");
        const featured = searchParams.get("featured");
        const search = searchParams.get("search");

        const query = {
            isPublished: true,
        };

        if (category) {
            query.category = category;
        }

        if (tag) {
            query.tags = tag;
        }

        if (featured !== null) {
            query.featured = featured === "true";
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
                    tags: {
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
            ];
        }

        const collection = dbConnect("blog");

        const totalBlogs = await collection.countDocuments(query);
        const totalPages = Math.ceil(totalBlogs / limit);

        const blogs = await collection
            .find(query)
            .project({
                content: 0, // Exclude large HTML content
                seo: 0
            })
            .sort({
                publishedAt: -1,
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

// Create blog
export async function POST(req) {
    try {

        const body = await req.json();

        const {
            title,
            slug,
            excerpt,
            coverImage,
            featured = false,
            isPublished = false,
            category,
            tags = [],
            author,
            content,
            seo,
        } = body;

        if (
            !title ||
            !slug ||
            !excerpt ||
            !coverImage ||
            !category ||
            !content
        ) {
            return Response.json(
                {
                    error: "Missing required fields",
                },
                {
                    status: 400,
                }
            );
        }

        const collection = dbConnect("blog");

        const exists = await collection.findOne({
            slug,
        });

        if (exists) {
            return Response.json(
                {
                    error: "Slug already exists",
                },
                {
                    status: 409,
                }
            );
        }

        const now = new Date();

        const result = await collection.insertOne({
            title,
            slug,
            excerpt,
            coverImage, // ImgBB URL
            featured,
            isPublished,
            category,
            tags,
            author,
            content,
            seo,
            views: 0,
            publishedAt: isPublished ? now : null,
            createdAt: now,
            updatedAt: now,
        });

        return Response.json(result, {
            status: 201,
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