import React from 'react';
import Link from 'next/link';

import { Grid, GridItem, Flex } from 'styles/global/Layout';
import { ListHeader, ListTile } from 'styles/components/List';
import Button from 'styles/ui/Button';

import Pagination from 'components/ui/Pagination';
import Placeholder from 'ui/Placeholder';


const List = (props) => {

    const { imageURL, query, label, cat, pathname, results, total_pages, goBackBtn } = props;

    // API limits: set 1000 as maximum result
    const maxTotalPages = total_pages > 1000 ? 1000 : total_pages;

    const renderResults = results.map(el => (
        <ListTile key={el.id} >
            <Link
                href={{
                    pathname: '/detail',
                    query: { cat: query.cat, id: el.id, page: 1 }
                }}
                as={`/detail/${query.cat}/${el.id}/${(el.title || el.name).replace(/[^a-zA-Z0-9-_]/g, '-')} `}
            >
                <a data-id={el.id}>
                    <div className="image">
                        {el.backdrop_path === null
                            ? <Placeholder type="backdropTile" cat={cat} />
                            : <img src={`${imageURL}/w780${el.backdrop_path}`} />
                        }
                    </div>
                    <div className="title"><h4>{el.title || el.name}</h4></div>
                </a>
            </Link>
        </ListTile>
    ))

    return (
        <Grid>
            {/* <Flex justifyContent="space-between"> */}
            <ListHeader>
                <h1>{label}</h1>
                { goBackBtn && (
                    <Link href={goBackBtn}>
                        <a>
                            <Button style={{ alignSelf: "center" }}>Go Back</Button>
                        </a>
                    </Link>
                )}
            </ListHeader>
            {results && results.length > 0
                ? (<React.Fragment>
                    <GridItem gridCol="1/-1" pos="relative">
                        <Pagination
                            query={query}
                            pathname={pathname}
                            totPages={maxTotalPages}
                        // alias={`genres/${query.cat}/${query.genre.toLowerCase()}`}
                        />
                    </GridItem>

                    <Grid
                        cols="repeat(auto-fit, minmax(335px, 1fr))"
                        gap="25px"
                        pdd="20px"
                        rows="1fr" autoRows="1fr"
                    >
                        {renderResults}
                    </Grid>

                    <GridItem gridCol="1/-1" pos="relative">
                        <Pagination
                            query={query}
                            pathname={pathname}
                            totPages={maxTotalPages}
                        />
                    </GridItem>
                </React.Fragment>)
                : (
                    <React.Fragment>
                        <h2>Sorry, no {label} genre is available at the moment :(</h2>
                    </React.Fragment>
                )
            }
        </Grid>
    );
}

export default List;