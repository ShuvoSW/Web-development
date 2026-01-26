import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function CreateBlogFormServer() {

    const createBlog = async (formData: FormData) => {
        "use server"

        console.log(formData.get("title"));
    }

    return (
        <div>
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Create Blog</CardTitle>
                </CardHeader>
                <CardContent>
                    <form id="blog-form" action={createBlog}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel>Title</FieldLabel>
                                <Input type="text" name="title"></Input>
                            </Field>
                            <Field>
                                <FieldLabel>Content</FieldLabel>
                                <Input type="text" name="title"></Input>
                            </Field>
                            <Field>
                                <FieldLabel>Tags</FieldLabel>
                                <Input type="text" name="title"></Input>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button form="blog-form" type="submit" className="W-full">Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
