import dbConnect from "@/lib/dbConnect";

export async function GET(req) {

    try {

        const { searchParams } = new URL(req.url);

        const q = searchParams.get("q");

        if (!q) {

            return Response.json([]);

        }

        const blogs = await dbConnect("blog")
            .find({
                isPublished: true,
                $or: [
                    {
                        title: {
                            $regex: q,
                            $options: "i",
                        },
                    },
                    {
                        excerpt: {
                            $regex: q,
                            $options: "i",
                        },
                    },
                    {
                        category: {
                            $regex: q,
                            $options: "i",
                        },
                    },
                    {
                        tags: {
                            $regex: q,
                            $options: "i",
                        },
                    },
                ],
            })
            .toArray();

        return Response.json(blogs);

    } catch (error) {

        return Response.json(
            { error: error.message },
            { status: 500 }
        );

    }

}