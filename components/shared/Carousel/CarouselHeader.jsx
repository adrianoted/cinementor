import React from 'react';
import Link from 'next/link';
import { Flex } from 'styles/global/Layout';
import ToggleSwitchButton from 'components/ui/ToggleSwitchButton';
import Button from 'styles/ui/Button';

const CarouselHeader = (props) => {

    const { label, genre, category, isOn, handleToggleSwitch } = props;
    return (
        <Flex justifyContent="space-between">
            <h2 style={{ "marginTop": "5px", paddingRight: "5px", lineHeight: "1.2" }}>{label}</h2>
            <Link
                href={{
                    pathname: '/discover',
                    query: { cat: category, genre, label, page: 1 }
                }}
            >
                <a style={{ "marginLeft": "auto", "alignSelf": "center" }}><Button pdd="10px 20px">See all</Button></a>

            </Link>
            <ToggleSwitchButton isOn={isOn} handleToggle={handleToggleSwitch} genre={genre}/>
        </Flex>
    );
};


export default CarouselHeader;