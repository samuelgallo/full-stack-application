import { gql, useQuery } from "@apollo/client";
import { getSession, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import { useGetProductsQuery } from "../../graphql/generated/graphql";
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from "../../graphql/generated/pagePublic";
import { withApollo } from "../../lib/withApollo";

function Home({ me }) {
  const { user } = useUser();
  //const { data, loading, error } = useGetProductsQuery();
  console.log(me);
  return (
    <div>
      <h1>Hello world!</h1>

      <pre>{JSON.stringify(me, null, 2)}</pre>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
