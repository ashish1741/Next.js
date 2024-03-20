export default function Docs({
    params,
  }: {
    params: {
      slug: string[];
    };
  }) {
    // Check if `params.slug` has exactly two items
    if (params.slug?.length === 2) {
      return <h1>viewing docs for features {params.slug[0]} and concept {params.slug[1]}</h1>;
    }
    // Check if `params.slug` has exactly one item
    else if (params.slug?.length === 1) {
      return <h1>viewing docs for features {params.slug[0]}</h1>;
    }
  
    // Default return if none of the above conditions are met
    return <h1>docs home page</h1>;
  }
  