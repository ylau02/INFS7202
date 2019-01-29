/*
      Name: Joyce Wing Yan Lau
      Student Number: 42377029
      Course: INFS7202
      Tutorial: P01 Monday 8am
*/

//To hide div that contains extra hard drive option in BYO.html
function showonlyone(divname) {
      document.getElementById(divname).style.display = "block";

}

//Form validation for Checkout form (in checkout.html)
function showDiv() {
      var cardName = document.getElementById('card-holder-name').value;
      var cardNum = document.getElementById('card-number').value;
      var cvv = document.getElementById('cvv').value;
      var expMonth = document.getElementById('expiry-month').value;
      var iscardNum = /^\d+$/.test(cardNum);
      var iscvvNum = /^\d+$/.test(cvv);
      if((cardName == '') || (cardNum == '') || (cvv == '') || (expMonth == 'Month')){
            alert("Please Fill Required Fields");
      }else if((iscardNum == false) || (iscvvNum == false) ){
            alert("Please re-enter credit card number OR CVV")
      }else{
            document.getElementById('show_hide').style.display = "block";

      }
      
}
//Show the div that will contain the price of Custom build
function showPrice(){
      document.getElementById('show_hide1').style.display = "block";
}

//Form validation for contact form in ContactUs.html
function submit_check(){
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if((name == '') || (email == '') || (message == '')){
            alert('Please Fill Required Fields');
      }else if (!filter.test(email)) {
            alert('Please provide a valid email address');
      }else{
            document.getElementById('show_hide').style.display = "block";

      }
}

