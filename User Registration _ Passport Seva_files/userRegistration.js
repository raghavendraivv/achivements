function validateName(a){var b=/(^[a-zA-Z'\s]*$)/i;if(b.test(a)==false){alert("Name cannot have digits and special characters except ' ");document.getElementById("givenName").value="";document.frmSample.givenName.focus()}}function validateDate(a){var b=/(^(((((0?[1-9])|(1\d)|(2[0-8]))\/((0?[1-9])|(1[0-2])))|((31\/((0[13578])|(1[02])))|((29|30)\/((0?[1,3-9])|(1[0-2])))))\/(((18|19|20)[0-9][0-9]))|(29\/0?2\/(18|19|20)(([02468][048])|([13579][26]))))$)/i;if(a=="DD/MM/YYYY"){}else{if(b.test(a)==false){alert("Invalid Date");document.getElementById("dob").value="";document.frmSample.dob.focus()}}}function validateSurname(a){var b=/(^[a-zA-Z'\s]*$)/i;if(b.test(a)==false){alert("Surname cannot have digits and special characters except ' ");document.getElementById("surname").value="";document.frmSample.surname.focus()}}function validateHintQues(a){if(a==""||a==null){}}function validateLoginId(a){if(a==""||a==null){}if(document.getElementById("emailloginSameno").checked){if(document.getElementById("email").value!=""&&document.getElementById("email").value!=null){if(document.getElementById("email").value==a){alert("Login ID cannot be same as Email ID as you have selected no above");document.getElementById("loginId").value="";document.frmSample.loginId.focus()}}}}function blah(a){if(a=="yes"){document.getElementById("loginId").value=document.getElementById("email").value;document.getElementById("loginId").readOnly=true}if(a=="no"){if(document.getElementById("loginId").value==document.getElementById("email").value){document.getElementById("loginId").value="";document.getElementById("loginId").readOnly=false}else{document.getElementById("loginId").readOnly=false}}}function validateHintAns(a){if(a==""||a==null){}}function validateCaptcha(a){if(a==""||a==null){}}function validatePassword(a){if(a==""||a==null){}}function validateConfirmPassword(a){if(a==""||a==null){}}function blah3(a){if(a!=""&&a!=null){checkemail(a)}var b="!#$%^&*()+=[]\\';,/{}|\":<>?";for(var c=0;c<document.frmSample.email.value.length;c++){if(b.indexOf(document.frmSample.email.value.charAt(c))!=-1){alert("Please enter a valid email address.");document.getElementById("email").value="";document.frmSample.email.focus();return false}}yes=document.getElementById("emailloginSameyes").checked;if(yes){document.getElementById("loginId").value=document.getElementById("email").value;document.getElementById("loginId").readOnly=true}return true}function validate(){if(!isValidEmail(document.frmSample.email.value)){alert("Please enter a valid email address");document.getElementById("email").value="";document.frmSample.email.focus();return false}return true}function clickclear(a,b){if(a.value==b){a.value="";a.style.color="#000000"}}function clickrecall(a,b){if(a.value==b||a.value==""){a.value=b}else{a.style.color="#000000"}}function checkemail(a){var b=/^.+@.+\..{2,3}$/;if(b.test(a)==false){alert("Please enter a valid email address.");document.getElementById("email").value="";document.frmSample.email.focus();return false}}function checkSpecialChar(){var a="!#$%^&*()+=[]\\';,/{}|\":<>?";for(var b=0;b<document.frmSample.loginId.value.length;b++){if(a.indexOf(document.frmSample.loginId.value.charAt(b))!=-1){alert("Invalid Login ID. Login ID can contain alphabets (a-z and A-Z), digits (0-9) and special characters (- . _ @). It must start with an alphabet and maximum 35 characters are allowed.");document.frmSample.loginId.focus();return false}else if(document.frmSample.loginId.value.charAt(b)==" "){alert("Space is not allowed in Login Id.");document.frmSample.loginId.focus();return false}}return true}