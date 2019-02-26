import React from 'react';
import { Flex } from 'styles/global/Layout';
import { formatDate } from 'utils/utils';


const DetailAsideInfo = (props) => {
    const { detailAsideInfo: { data, lang, cat } } = props;

    // Content variables
    const isMovie = cat === "movie";
    const country = isMovie ? data.production_countries : data.origin_country;

    return (
        <React.Fragment>
            <Flex direction="column" >
                <p className="info-label">{country && country.length <= 1 ? "Country" : "Countries"}</p>
                {country && country.length > 0 && country.map(country => {
                    return (
                        <h4 className="info-data" key={country.iso_3166_1 || country + 1}>{country.name || country} </h4>
                    )
                }) || "-"}
            </Flex>

            <Flex direction="column" mrg="20px 0">
                <p className="info-label">Original Language</p>
                {lang && lang.length > 0 && lang.map(el => {
                    if (el.iso_639_1 === data.original_language) {
                        return <h4 className="info-data" key={el.iso_639_1}>{el.english_name}</h4>
                    }
                }) || "-"}
            </Flex>

            {/* If is movie show this two content: */}
            {isMovie &&
                <React.Fragment>
                    <Flex direction="column" mrg="20px 0">
                        <p className="info-label">Spoken Language</p>
                        {data.spoken_languages && data.spoken_languages.length > 0 && data.spoken_languages.map(el => {
                            return <h4 className="info-data" key={el.iso_639_1}>{el.name}</h4>
                        }) || "-"}
                    </Flex>
                    <Flex direction="column" mrg="20px 0">
                        <p className="info-label">Release Date</p>
                        <h4 className="info-data">
                            {formatDate(data.release_date) || "-"}
                        </h4>
                    </Flex>
                </React.Fragment>
            }

            {/* Or show the first and the last date of the episodes's airing */}
            {!isMovie &&
                <React.Fragment>
                    <Flex direction="column" mrg="20px 0">
                        <p className="info-label">First aired</p>
                        <h4 className="info-data">
                            {formatDate(data.first_air_date) || "-"}
                        </h4>
                    </Flex>
                    <Flex direction="column" mrg="20px 0">
                        <p className="info-label">Last aired</p>
                        <h4 className="info-data">
                            {formatDate(data.last_air_date) || "-"}
                        </h4>
                    </Flex>
                </React.Fragment>
            }

            { data.homepage &&
                <Flex direction="column" mrg="20px 0">
                    <p className="info-label">Homepage</p>
                    <a href={data.homepage} title="Go to the Homepage" target="_blank">
                        <h4 className="info-data word-break">{data.homepage}</h4>
                    </a>
                </Flex>
            }
        </React.Fragment>
    );
}

export default DetailAsideInfo;