import dbConnect from "@/lib/dbConnect";

export async function GET() {

    try {

        const blogs = await dbConnect("blog")
            .find({
                featured: true,
                isPublished: true,
            })
            .project({
                content: 0,
                seo: 0
            })
            .sort({
                publishedAt: -1,
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