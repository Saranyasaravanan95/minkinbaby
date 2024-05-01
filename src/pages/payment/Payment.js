
import React,{useState} from 'react';


function Payment() {
 
    const [amount, setamount] = useState('');
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(amount === ""){
      alert("please enter amount");
      }else{
        var options = {
          key: "rzp_test_MdDq0p4Gyw1tWe",
          key_secret:"6nbmQGGBxKXBBy5EQd2xlW5M",
          amount: amount *100,
          currency:"INR",
          name:"STARTUP_PROJECTS",
          description:"for testing purpose",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"SARANYA B S",
            email:"saranyabs.21it@kongu.edu",
            contact:"8838211610"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }
    return (
      <div className="App">
        <h1 style={{ fontWeight: 'bold', color: 'black' }}>Razorpay Payment Integration</h1>
       
       <p>Scan QR CODE and Proceed to pay here </p>

       <div className="payment-container">

      
    </div>
       <br/>
       <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
       <br/><br/>
       <button onClick={handleSubmit}>submit</button>
      </div>
    );
  }
  
export default Payment;