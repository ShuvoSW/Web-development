
export const dynamic = 'force-dynamic';
export default async function AboutPage() {
  //For this simulation load time
  await new Promise((resolve) => setTimeout(resolve, 4000));

    //For this simulation error
    // throw new Error("Something went wrong");
  return (
    <div>
      <h1>This is about page component</h1>
    </div>
  );
}
