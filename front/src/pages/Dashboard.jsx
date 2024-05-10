import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import bondImg from '../images/bondImg.png';
import valide from '../images/valide.png';
import enCours from '../images/enCours.png';
import rejete from '../images/rejete.png';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

function Dashboard() {
  const [cover,setCover]=React.useState(null)
  const handelFileChange = (e) =>{
    if(e.target.files && e.target.files.length >0){
      setCover(e.target.files[0])
      console.log(e.target.files);
    }
  }
  const handelFile =async(e) =>{
    try{
      const formData = new FormData();
      formData.append("file", cover);

      const response = await axios.post(
        "http://localhost:4000/upload",
        formData
    )
  console.log(response);}
    catch(erorr){
      console.log(erorr);
    }

  }

  return (
    <div>
      
      <p style={{fontSize:28 }}>Dashboard</p>
      <div className='d-flex gap-4' >
    <div>
      
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className='d-flex gap-4 '>
        <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
          Total Bonde d'entée
        </Typography>
        
        <div>
        <img src={bondImg}  style={{width:40,height:40}} />
        </div>
        </div>
        <div className='text-center'>
        <p style={{fontSize:30}}>50</p>
        </div>
      </CardContent>
      
    </Card>
    </div>
    
    <div>

  
  <Card sx={{ minWidth: 275 }}>
  <CardContent>
    <div className='d-flex gap-4 '>
    <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
       Bonde d'entée valider
    </Typography>
    
    <div>
    <img src={valide}  style={{width:40,height:40}} />
    </div>
    </div>
    <div className='text-center'>
    <p style={{fontSize:30}}>10</p>
    </div>
  </CardContent>
  
</Card>
</div>
<div>
<Card sx={{ minWidth: 275 }}>
  <CardContent>
    <div className='d-flex gap-4 '>
    <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
       Bonde d'entée en cours
    </Typography>
    
    <div>
    <img src={enCours}  style={{width:40,height:40}} />
    </div>
    </div>
    <div className='text-center'>
    <p style={{fontSize:30}}>20</p>
    </div>
  </CardContent>
  
</Card>
</div>
<div>
<Card sx={{ minWidth: 275 }}>
  <CardContent>
    <div className='d-flex gap-4 '>
    <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
       Bonde d'entée a rejeter
    </Typography>
    
    <div>
    <img src={rejete}  style={{width:40,height:40}} />
    </div>
    </div>
    <div className='text-center'>
    <p style={{fontSize:30}}>4</p>
    </div>
  </CardContent>
  
</Card>
</div>
</div> 
<div className='d-flex justify-content-center'>
<LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={800}
      height={300}
    />
    </div>
<div className=' d-flex justify-content-around mt-4'>
  <div>
<PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    /></div>
    <div>
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider></div>

</div>
</div>
    
    
  )
}

export default Dashboard
