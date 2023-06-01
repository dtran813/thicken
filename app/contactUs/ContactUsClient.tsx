import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Icon from '../components/Icon';
import ContactUsSection from './ContactUsSection';

const ContactUsClient = () => {
  return (
    <div className="bg-orange-200 py-20">
      <div>
        <h1 className="text-2xl font-bold uppercase">Contact Us</h1>
        <p>We&apos;d love to hear from you!</p>
      </div>

      <section id="getInTouch" className="flex flex-col md:flex-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4061358.305505924!2d-118.95415857750264!3d38.70420951029718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c74b7776ae8a47%3A0xccc9f07c7bf2b054!2sDeath%20Valley%20National%20Park!5e0!3m2!1sen!2sus!4v1685633983433!5m2!1sen!2sus"
          width="600"
          height="600"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full md:basis-2/3"
        ></iframe>

        <div className="ml-5 mt-10 basis-1/3 md:mt-0 lg:ml-10">
          <h2 className="w-fit border-b-2 border-orange-600 pb-5 text-3xl font-semibold">
            Get In Touch
          </h2>

          <div className="flex flex-col">
            <div className="pt-2">
              <div className="mt-3 flex items-center">
                <span className="mt-2 self-start">
                  <Icon icon={FiPhone} />
                </span>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold">Phone:</h3>
                  <p className="mt-2 text-base text-black/70">123-456-7890</p>
                </div>
              </div>

              <div className="mt-10 flex items-center">
                <span className="mt-2 self-start">
                  <Icon icon={FiMail} />
                </span>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold">Email:</h3>
                  <p className="mt-2 text-base text-black/70">
                    info@thicken.com
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center">
                <span className="mt-2 self-start">
                  <Icon icon={FiMapPin} />
                </span>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold">Address:</h3>
                  <p className="mt-2 text-base text-black/70">
                    Somewhere in Death Valley, <br />
                    <span className="mt-2 inline-block">Skidoo, CA 92328</span>
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center">
                <span className="mt-2 self-start">
                  <Icon icon={FiClock} />
                </span>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold">Hours:</h3>
                  <p className="mt-2 text-base text-black/70">
                    <strong>Monday - Thursday</strong>: 11am - 9pm
                  </p>
                  <p className="mt-2 text-base text-black/70">
                    <strong>Friday</strong>: 11am - 11pm
                  </p>
                  <p className="mt-2 text-base text-black/70">
                    <strong>Saturday</strong>: 9am - 11pm | Brunch 9am - 2pm
                  </p>
                  <p className="mt-2 text-base text-black/70">
                    <strong>Sunday</strong>: 9am - 10pm | Brunch 9am - 2pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUsSection />
    </div>
  );
};

export default ContactUsClient;
