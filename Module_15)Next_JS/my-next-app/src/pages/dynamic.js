export default function DynamicPage({ data }) {
    return (
      <div>
        <h1>Dynamic Page</h1>
        <p>Data: {data}</p>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    return {
      props: {
        data: `This data was generated at request time: ${new Date().toLocaleTimeString()}`,
      },
    };
  }
  