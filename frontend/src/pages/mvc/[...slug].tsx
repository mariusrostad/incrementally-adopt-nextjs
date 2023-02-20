// Use SSR for this page as currently rewrites don't work with dynamic pages without SSR
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Fallback() {
  return (
    <div>
      <p>fallback</p>
    </div>
  );
}
