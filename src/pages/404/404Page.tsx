import Head from "next/head";

// ----------------------------------------------------------------------

Page404.getLayout = (page: React.ReactElement) => <div>{page}</div>;

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Head>
        <title> 404 Page Not Found | Minimal UI</title>
      </Head>

      <div>
        <div>
          <p>Sorry, page not found!</p>
        </div>

        <div>
          <p>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </p>
        </div>
        <button>Go to Home</button>
      </div>
    </>
  );
}
