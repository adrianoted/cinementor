import React from 'react';
import styled, { keyframes } from 'styled-components';


const CircularChartStyle = styled.div`
    circle {
        transition: stroke-dashoffset 1s ;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
`;

const CircularChartLabel = styled.div`
    text-align: center;
    font-family: ${props => props.fontFamily || "sans-serif"};
    /* font-size: ${props => (props.fontSize * 0.7) || null}; */
    font-size: ${props => (props.fontSize * 0.7) || null}em;
    opacity: ${props => props.isCompleted ? 1 : 0};
    transition: opacity 300ms ease-out;
`;


class CircularChart extends React.Component {

    state = {
        progress: 0,
        normalizedRadius: this.props.radius - this.props.strokeWidth * 2,
        count: null
    }

    componentDidMount() {
        const { progress } = this.state;

        // Set a delay to avoid lagging on loading after page is mount
        setTimeout(() => this.updateProgressCircle(progress), 800);

        //when progress value is ready start updating the count values (NOTE: maybe the speed equation should be correct)
        const speed = 3600 / (360 - progress);
        setInterval(() => this.updateCount(), speed);
    }

    componentWillUnmount(){
        this.setState( { progress: 0, count: null } );
    }

    // get the final progress value
    updateProgressCircle = (progressStartValue) => {
        const { count } = this.state;

        // if there is no value return null and do not display text
        const isValue = count > 0 ? count : null;

        this.setState(
            {
                progress: progressStartValue + parseInt((this.props.finalProgressValue * 10), 10),
                count: isValue
            }
        );
    }

    // Update hte text percentage until the limit of progress value
    updateCount = () => {
        const { count } = this.state;
        if (count < this.state.progress) {
            this.setState({
                count: count + 1
            });
        }
    }


    render() {
        const { isVote, radius, strokeClr, strokeWidth, circularChartFill, circularChartFontSize, circularChartFontFamily, circularChartLabel } = this.props;
        const { normalizedRadius, progress, count } = this.state;

        const circumference = normalizedRadius * 2 * Math.PI;
        const strokeDashoffset = circumference - progress / 100 * circumference;

        // choose how to display the vote average (as floated number or percentage)
        // Display "%" only when the value of percentage become a number
        const labelPercentage = count !== null ? `${count}%` : count;
        const labelVote = count !== null ? (count / 10) : null;

        // if the flas isVote is passed as prop display the vote 
        const finalLabelText = isVote ? labelVote : labelPercentage;

        const finalCount = parseInt((this.props.finalProgressValue * 10), 10);

        return (
            <CircularChartStyle>
                <svg
                    height={radius * 2}
                    width={radius * 2}
                >
                    <circle
                        stroke={strokeClr || "#ededed"}
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset }}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <text
                        x={radius}
                        y={radius}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fill={circularChartFill || "#ededed"}
                        fontSize={circularChartFontSize + "em" || null}
                        fontFamily={circularChartFontFamily || "sans-serif"}
                    >
                        {finalLabelText}
                    </text>
                </svg>
                <CircularChartLabel
                    fontFamily={circularChartFontFamily}
                    fontSize={circularChartFontSize}
                    isCompleted={count === finalCount}
                >
                    {circularChartLabel}
                </CircularChartLabel>
            </CircularChartStyle >
        );
    };
};


export default CircularChart;