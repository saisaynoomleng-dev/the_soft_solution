import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { AUTHOR_QUERY } from '@/sanity/lib/queries';

const AuthorPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: author } = await sanityFetch({
    query: AUTHOR_QUERY,
    params: await params,
  });
  return (
    <Bounded>
      <Title
        size="lg"
        as="h1"
      >
        About the Author
      </Title>

      <div className="flex flex-col gap-5 max-w-[50%] mx-auto  p-5 border border-brand-purple rounded-lg">
        <Title
          size="sm"
          as="h2"
          className="text-left"
        >
          {author?.name}
        </Title>
        <Paragraph>{author?.bio}</Paragraph>
      </div>
    </Bounded>
  );
};

export default AuthorPage;
