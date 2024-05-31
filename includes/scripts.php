<div class="overlay"></div>


<div class="popup popup-layout popup-default">
	<a class="popup-close" href="javascript:;"><i class="fa fa-times" aria-hidden="true"></i></a>
	<div class="popup-wrapper">
		<div class="row">
			<div class="col-md-12">
				<div class="popup-head">
					<h5><strong>Wait! </strong>Looking for an <strong>Amazing Offer?</strong></h5>
					<h4>Get Your <strong>Design Now</strong></h4>
				</div>
			</div>

			<div class="col-lg-5" data-form-type="ordernow_form">
				<form id="regForm" method="post">
					<div class="footerForm-feild">
						<div class="icon"><i class="fas fa-user"></i></div>
						<input type="text" class="feildName" name='Name_pop1' placeholder="Enter Your Name">
						<!-- <input type="text" name="name" class="popup-field" placeholder="Enter Your Name" data-validation="required" /> -->
					</div>

					<div class="footerForm-feild">
						<div class="icon"><i class="fas fa-envelope"></i></div>
						<input type="email" class="feildEmail" name='Email_pop1' placeholder="Email Address">
					</div>

					<div class="footerForm-feild">
						<input type="tel" class="feildPhone" name='Phone_pop1' id="phone2" class="phone-country" placeholder="Phone Number">
					</div>

					<div class="footerForm-btn">
						<button class="footer-formBtn" type="submit" name="submit-popup1">
							Send Now
							<div class="icon">
								<i class="fas fa-arrow-circle-right"></i>
							</div>
						</button>
					</div>

					<!-- <div class="form-group form-icon">
						<i class="fa fa-envelope fs-18" aria-hidden="true"></i>
						<input type="email" name="email" class="popup-field" placeholder="Email Address" data-validation="required" />
					</div>
					<div class="form-group form-icon">
						<input type="tel" name="phone" maxlength="10" id="phone2" class="phone-country popup-field" placeholder="Phone Number" data-validation="required" />
					</div>
					<div class="form-group mb-0">
						<button type="submit" name="submit" class="btn-style-2" value="Get in Touch">Get in Touch</button>
						<div id="formResult"></div>
					</div> -->
				</form>
			</div>
			<div class="col-lg-4 mob-display-none">
				<div class="element seprator"></div>
				<div class="contact-info">
					<h6>Email</h6>
					<a href="mialto:"><span>sale@brand.com</span></a>
				</div>
				<div class="contact-info">
					<h6>Phone</h6>
					<a href="tel:+1 (844) 111-9875">+1 (844) 111-9875</a>
				</div>
				<div class="contact-info">
					<h6>Address</h6>
					<a href="javascript:;">12100 Wilshire Boulevard, 8th Floor, Los Angeles, California, 90025, United States of America</a>
				</div>
			</div>
		</div>
	</div>
	<img class="element element-22" src="assets/images/elements/element-22.png" />
	<img class="element element-23" src="assets/images/elements/element-14.png" />
	<img class="element element-24" src="assets/images/elements/element-11.png" />
</div>

<div class="popup popup-layout custom-layout">
	<a class="popup-close" href="javascript:;"><i class="fa fa-times" aria-hidden="true"></i></a>

	<div class="popup-wrapper">
		<div class="row">
			<div class="col-md-5 p-0">
				<div class="popup-left-cont">
					<h5>Get Your</h5>
					<h6>Design Now</h6>

					<div class="popupLeftCont-box">
						<span>UPTO</span>
						<h4>70% OFF</h4>
					</div>
				</div>
			</div>

			<div class="col-md-7 p-0">
				<div class="popup-left-form">
					<h6>Wait! Looking for an</h6>
					<h5>Amazing Discount?</h5>

					<div class="popupLeftForm">
						<div class="footerForm-feild">
							<div class="icon"><i class="fas fa-user"></i></div>
							<input type="text" class="feildName" name='Name' placeholder="Enter Your Name" require>
						</div>

						<div class="footerForm-feild">
							<div class="icon"><i class="fas fa-envelope"></i></div>
							<input type="email" class="feildEmail" name='Email' placeholder="Email Address" require>
						</div>

						<div class="footerForm-feild">
							<div class="icon"><i class="fas fa-phone"></i></div>
							<input type="text" class="feildPhone" name='Phone' placeholder="Phone Number">
						</div>

						<div class="footerForm-btn">
							<button class="footer-formBtn" type="submit" name="submit-main">
								Get In Touch
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
















<script src="assets/js/jquery.js"></script>
<script src="assets/js/custom.js"></script>
<script>
	new WOW().init();

	$("#phone2").intlTelInput({

		// allowDropdown: false,
		// autoHideDialCode: false,
		// autoPlaceholder: "off",
		// dropdownContainer: "body",
		// excludeCountries: ["us"],
		// formatOnDisplay: false,
		// geoIpLookup: function(callback) {
		// 	$.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
		// 		var countryCode = (resp && resp.country) ? resp.country : "";
		// 		callback(countryCode);
		// 		ip = resp.ip;


		// 	});
		// },
		// initialCountry: "auto",
		nationalMode: false,
		separateDialCode: true,
		// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
		// placeholderNumberType: "MOBILE",
		preferredCountries: ['us'],
	});
</script>