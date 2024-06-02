export const LinearChartData = {
    // Daily Calory burn data of me and recorded in watch

    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories Burned by Me',
        data: [2000, 3000, 1000, 2000, 3000, 2500, 5000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Calories Burned recorded in watch',
        data: [3000, 4000, 2000, 3000, 4000, 3500, 6000],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]

}

export const BarChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Calories Burned by Me',
      data: [2000, 3000, 1000, 2000, 3000, 2500, 5000],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Calories Burned recorded in watch',
      data: [3000, 4000, 2000, 3000, 4000, 3500, 6000],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
}

export const PieChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Calories Burned by Me',
      data: [2000, 3000, 1000, 2000, 3000, 2500, 5000],
      backgroundColor:[
       "red",
       "blue",
       "green",
       "yellow",
       "orange",
       "purple",
       "pink"
      ] ,
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
      hoverOffset: 4
      
    },
    // {
    //   label: 'Calories Burned by My GF',
    //   data: [3000, 4000, 2000, 3000, 4000, 3500, 6000],
    //   backgroundColor: 'rgb(255, 99, 132)',
    // },
  ],
}

