import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HC_exporting from "highcharts/modules/exporting";
HC_exporting(Highcharts)

const Chart = ({ data, week, author }) => {

    const getData = () => {
        if (data.length != 0) {
            let chartOptions = {
                title: {
                    text: "Total Changes"
                },
                xAxis: {
                    tickInterval: 7 * 24 * 3600 * 1000, // one week
                    tickWidth: 1,
                    type: "datetime",
                    dateTimeLabelFormats: {
                        day: "%e %b"
                    }
                },
                tooltip: {
                    shared: true,
                    useHtml: true,
                    formatter: function () {
                        let formattedString = "<small></small><table>";
                        week.forEach(elem => {
                            formattedString +=
                                '<tr><td style="color: {series.color}">' +
                                elem.w +
                                ": </td>";
                            formattedString +=
                                '<td style="text-align: right"><b>' + elem.a + "</b></td></tr>";
                        });
                        return formattedString;
                    }
                },
                series: [
                    {
                        name: author.login,
                        data: week.map((data) => { return data.a })
                    },

                    {
                        name: author.login,
                        data: week.map((data) => { return data.d })
                    }, 
                    {
                        name: author.login,
                        data: week.map((data) => { return data.c })
                    }
                ]
            }
            return <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        } else {
            return 0;
        }
    }
    return (
        <div>
            {
                getData()

            }

            {console.log("d", author)}

        </div>
    )
}

export default Chart