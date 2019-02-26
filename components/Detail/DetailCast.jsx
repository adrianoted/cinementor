import React from 'react';
import { IMAGE_URL } from 'constants';
import { Grid, GridItem } from 'styles/global/Layout';
import Placeholder from 'ui/Placeholder';


const DetailCast = (props) => {
    const { cast } = props;

    // adjust col sizes based on the number of actors
    const colsLayout = cast.length > 3 ? "repeat(auto-fit, minmax(155px, 1fr))" : "repeat(auto-fit, minmax(min-content, 190px))";
    return (
        <React.Fragment>
            <h2 className="info-title">Cast</h2>

            <Grid cols={colsLayout} gap="15px" rows="1fr" autoRows="1fr">
                {cast.length > 0 && cast.map((el, i) => {
                    
                    if (i < 10) {
                        return (
                            <Grid key={el.id} gap="20px 0" rows="inherit">
                                <GridItem >
                                    {el.profile_path !== null
                                        ? <img src={`${IMAGE_URL}/w500${el.profile_path}`} />
                                        : <Placeholder type="actor"/>
                                    }

                                </GridItem>
                                <GridItem alignSelf="flex-end" className="cast-label-box">
                                    <h4 className="info-data">{el.name} </h4>
                                    <p className="info-label">as {el.character}</p>
                                </GridItem>
                            </Grid>
                        )
                    }
                }) || <GridItem gridCol="1/-1"><p>Sorry, no cast info available at the moment :(</p></GridItem>}
            </Grid>

        </React.Fragment>

    );
}

export default DetailCast;