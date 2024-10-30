import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Container from '../components/Container';

export default function BlogPage() {

    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: {frontmatter: {date: DESC}}) {
                nodes {
                    frontmatter {
                        date(formatString: "DD/MM/YYYY")
                        title
                        slug
                    }
                    id
                    excerpt
                }
            }      
        }`);

    return (
        <Container>
            <p>Esses são os últimos Posts:</p>
            {
                data.allMdx.nodes.map(item => (
                    <article key={item.id}>
                        <Link to={`/${item.frontmatter.slug}`}>
                            {item.frontmatter.title}
                        </Link>
                        <p>Data: {item.frontmatter.date}</p>
                        <p>{item.excerpt}</p>
                    </article>
                ))
            }
        </Container>
    )
}

export const Head = () => <title>Meu Blog - Posts</title>