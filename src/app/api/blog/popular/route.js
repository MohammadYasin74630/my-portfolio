import dbConnect from "@/lib/dbConnect";

export async function GET() {

    try {

        const blogs = await dbConnect("blog")
            .find({
                isPublished: true,
            })
            .project({
                content: 0, 
                seo: 0
            })
            .sort({
                views: -1,
            })
            .limit(5)
            .toArray();

        return Response.json(blogs);

    } catch (error) {

        return Response.json(
            { error: error.message },
            { status: 500 }
        );

    }

}