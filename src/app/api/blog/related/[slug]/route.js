import dbConnect from "@/lib/dbConnect";

export async function GET(req, { params }) {

    try {

        const { slug } = await params;

        const current = await dbConnect("blog").findOne({
            slug,
        });

        if (!current) {

            return Response.json([]);

        }

        const blogs = await dbConnect("blog")
            .find({
                slug: {
                    $ne: slug,
                },
                category: current.category,
                isPublished: true,
            })
            .limit(3)
            .toArray();

        return Response.json(blogs);

    } catch (error) {

        return Response.json(
            { error: error.message },
            { status: 500 }
        );

    }

}