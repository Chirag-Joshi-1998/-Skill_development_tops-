export default function StaticPage({ data }) {
    return (
      <div>
        <h1>Static Page</h1>
        <p>Data: {data}</p>
      </div>
    );
  }
  
  export async function getStaticProps() {
    return {
      props: {
        data: "This is a static page",
      },
    };
  }
  