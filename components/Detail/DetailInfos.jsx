import React from 'react';
import { Grid, Flex } from 'styles/global/Layout';
import { IMAGE_URL } from 'constants';


const DetailInfos = (props) => {

    const { detailInfos: { data, lang, cat, crew } } = props;

    // Content variables
    const isMovie = cat === "movie";

    let crewFiltered = crew.filter(el => el.job == "Director" || el.job == "Producer" || el.job == "Executive Producer" || el.job == "Novel" || el.job == "Screenplay");
    
    return (
        <React.Fragment>
            <h2 className="info-title">Infos</h2>
            <p>{data.overview || "Sorry, no plot available at the moment :(" }</p>

            <Grid cols="repeat(auto-fit, minmax(170px, 1fr))" alignItems="flex-end" gap="20px">
                {crew && 
                    crewFiltered.map(el => {
                        return (
                            <Flex direction="column" key={el.credit_id} >
                                <p className="info-label">{el.job} </p>
                                <h4 className="info-data"> {el.name} </h4>
                            </Flex>
                        )
                    })
                }
            </Grid>

            <Grid cols="repeat(auto-fit, minmax(50px, 70px))" alignItems="flex-end" gap="10px">
                {!isMovie && data.networks &&
                    data.networks.map(el => {
                        return (
                            <Flex direction="column" mrg="5px 0" key={el.id} alignSelf="center">
                                <img src={`${IMAGE_URL}/w92${el.logo_path}`} title={el.name} />
                            </Flex>
                        )
                    })
                }
            </Grid>

        </React.Fragment>
    );
}

export default DetailInfos;