import dbConnect from "@/lib/dbConnect";

export async function GET(req, { params }) {

    try {

        const { slug } = await params;

        const blog = await dbConnect("blog").findOne({
            slug,
        });

        if (!blog) {

            return Response.json(
                { error: "Blog not found" },
                { status: 404 }
            );

        }

        await dbConnect("blog").updateOne(
            { slug },
            {
                $inc: {
                    views: 1,
                },
            }
        );

        return Response.json(blog);

    } catch (error) {

        return Response.json(
            { error: error.message },
            { status: 500 }
        );

    }

}


export async function PATCH(req, { params }) {

    try {

        const { slug } = await params;

        const body = await req.json();

        const collection = dbConnect("blog");

        const blog = await collection.findOne({
            slug,
        });

        if (!blog) {

            return Response.json(
                {
                    error: "Blog not found",
                },
                {
                    status: 404,
                }
            );

        }

        // Prevent updating immutable fields
        delete body._id;
        delete body.views;
        delete body.createdAt;

        body.updatedAt = new Date();

        // First time publishing
        if (
            body.isPublished === true &&
            !blog.publishedAt
        ) {
            body.publishedAt = new Date();
        }
        else {
            delete body.publishedAt;
        }

        // Prevent duplicate slug
        if (body.slug && body.slug !== slug) {

            const exists = await collection.findOne({
                slug: body.slug,
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

        }

        const result = await collection.updateOne(
            {
                slug,
            },
            {
                $set: body,
            }
        );

        return Response.json(result);

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


export async function DELETE(req, { params }) {

    try {

        const { slug } = await params;

        const result = await dbConnect("blog").deleteOne({
            slug,
        });

        if (result.deletedCount === 0) {
            return Response.json(
                {
                    error: "Blog not found.",
                },
                {
                    status: 404,
                }
            );
        }

        return Response.json({
            message: "Blog deleted successfully.",
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