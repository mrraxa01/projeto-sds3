import Chart from 'react-apexcharts';

const BarChart = () =>{
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    return(

        <Chart 
        //os ... e dupla chaves carrega o objeto options completo + dados locais
        //xaxis eixo x do gráfico
            options={{...options, xaxis:mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />
    );}
    export default BarChart;
            