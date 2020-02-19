import { extend, setInteractionMode } from 'vee-validate';
import { required, email, min, confirmed } from 'vee-validate/dist/rules';

setInteractionMode("eager");


extend('confirmed', {
	...confirmed,
	message: "Must match {target}"
})

extend('min', {
	...min,
	message: "Must be longer than {length}"
});

extend('required', {
	...required,
	message: "This field is required"
});

extend('email', {
	...email,
	message: "You must provide a valid email address"
})