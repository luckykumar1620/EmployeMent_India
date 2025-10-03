import service_img from './service_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_img from './contact_img.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import work1 from './work1.png'
import work2 from './work2.png'
import work3 from './work3.png'
import work4 from './work4.png'
import work5 from './work5.png'
import work6 from './work6.png'
import work7 from './work7.png'
import work8 from './work8.png'
import work9 from './work9.png'
import work10 from './work10.png'
import work11 from './work11.png'
import work12 from './work12.png'
import work13 from './work13.png'
import work14 from './work14.png'
import work15 from './work15.png'
import Electrician from './electrician.svg'
import Ac_Techniquecian from './AcTechnician.svg'
import Carpenter from './carpenter.svg'
import Painter from './painter.svg'
import Plumber from './plumber.svg'
import Welder from './welder.svg'

export const assets={
     service_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_img,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo

}

export const specialityData = [
    {
        speciality: 'Electrician',
        image: Electrician
    },
    {
        speciality: 'Ac Technician',
        image: Ac_Techniquecian
    },
    {
        speciality: 'Carpenter',
        image: Carpenter
    },
    {
        speciality: 'Plumber',
        image: Plumber
    },
    {
        speciality: 'Welder',
        image: Welder
    },
    {
        speciality: 'Painter',
        image: Painter
    },
]

export const workers = [
    {
        _id: 'work1',
        name: 'Rajesh Kumar',
        image: work1,
        speciality: 'Electrician',
        skill: 'Wiring & Electrical Maintenance',
        experience: '4 Years',
        about: 'Rajesh is a skilled electrician with expertise in wiring, repairing electrical systems, and ensuring safe installations.',
        fees: 500,
        address: {
            line1: 'Sector 10, Dwarka',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'work2',
        name: 'Amit Sharma',
        image: work2,
        speciality: 'Plumber',
        skill: 'Pipeline & Sanitary Work',
        experience: '3 Years',
        about: 'Amit is an experienced plumber specializing in water leakage solutions, bathroom fittings, and sanitary work.',
        fees: 400,
        address: {
            line1: 'Andheri East',
            line2: 'Mumbai, India'
        }
    },
    {
        _id: 'work3',
        name: 'Suresh Yadav',
        image: work3,
        speciality: 'Carpenter',
        skill: 'Furniture & Woodwork',
        experience: '5 Years',
        about: 'Suresh is a professional carpenter skilled in building and repairing furniture, doors, and custom designs.',
        fees: 600,
        address: {
            line1: 'Salt Lake Sector 3',
            line2: 'Kolkata, India'
        }
    },
    {
        _id: 'work4',
        name: 'Anil Verma',
        image: work4,
        speciality: 'Painter',
        skill: 'Wall Painting & Polishing',
        experience: '2 Years',
        about: 'Anil is a painter with expertise in wall painting, texture designs, and wood polishing services.',
        fees: 350,
        address: {
            line1: 'MG Road',
            line2: 'Bengaluru, India'
        }
    },
    {
        _id: 'work5',
        name: 'Imran Khan',
        image: work5,
        speciality: 'Welder',
        skill: 'Metal Welding & Fabrication',
        experience: '6 Years',
        about: 'Imran is a welder skilled in fabrication, steel works, and structural welding for construction projects.',
        fees: 700,
        address: {
            line1: 'Charminar',
            line2: 'Hyderabad, India'
        }
    },
    {
        _id: 'work6',
        name: 'Vikas Singh',
        image: work6,
        speciality: 'Electrician',
        skill: 'House Wiring & Appliances',
        experience: '4 Years',
        about: 'Vikas is an electrician who handles house wiring, inverter installation, and electrical maintenance.',
        fees: 500,
        address: {
            line1: 'Alambagh',
            line2: 'Lucknow, India'
        }
    },
    {
        _id: 'work7',
        name: 'Ravi Patel',
        image: work7,
        speciality: 'Plumber',
        skill: 'Bathroom & Kitchen Fittings',
        experience: '8 Years',
        about: 'Ravi is a plumber with long experience in bathroom fittings, water tank installation, and pipeline work.',
        fees: 450,
        address: {
            line1: 'Ellis Bridge',
            line2: 'Ahmedabad, India'
        }
    },
    {
        _id: 'work8',
        name: 'Ganesh Naik',
        image: work8,
        speciality: 'Carpenter',
        skill: 'Door & Window Work',
        experience: '7 Years',
        about: 'Ganesh is a carpenter specialized in door/window making, wooden repairs, and modular furniture.',
        fees: 650,
        address: {
            line1: 'Shivajinagar',
            line2: 'Pune, India'
        }
    },
    {
        _id: 'work9',
        name: 'Pooja Devi',
        image: work9,
        speciality: 'Painter',
        skill: 'Interior & Exterior Painting',
        experience: '3 Years',
        about: 'Pooja is a painter who provides both interior and exterior painting with neat finishing.',
        fees: 300,
        address: {
            line1: 'Civil Lines',
            line2: 'Jaipur, India'
        }
    },
    {
        _id: 'work10',
        name: 'Sunita Sharma',
        image: work10,
        speciality: 'Ac Technician',
        skill: 'AC Installation & Repair',
        experience: '5 Years',
        about: 'Sunita is an AC technician specializing in split/window AC installation, servicing, and gas refilling.',
        fees: 550,
        address: {
            line1: 'Boring Road',
            line2: 'Patna, India'
        }
    },
    {
        _id: 'work11',
        name: 'Deepak Kumar',
        image: work11,
        speciality: 'Welder',
        skill: 'Grill & Gate Welding',
        experience: '2 Years',
        about: 'Deepak is a welder who works on grills, gates, and small fabrication projects with accuracy.',
        fees: 350,
        address: {
            line1: 'Sector 62',
            line2: 'Noida, India'
        }
    },
    {
        _id: 'work12',
        name: 'Arjun Mehta',
        image: work12,
        speciality: 'Ac Technician',
        skill: 'Fridge & AC Maintenance',
        experience: '6 Years',
        about: 'Arjun is an AC technician with experience in fridge servicing, AC cooling issues, and compressor work.',
        fees: 600,
        address: {
            line1: 'Park Street',
            line2: 'Kolkata, India'
        }
    },
    {
        _id: 'work13',
        name: 'Mohan Lal',
        image: work13,
        speciality: 'Carpenter',
        skill: 'Wooden Repair & Polishing',
        experience: '4 Years',
        about: 'Mohan is a carpenter who provides wooden polishing, repair, and small furniture design services.',
        fees: 400,
        address: {
            line1: 'Rajouri Garden',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'work14',
        name: 'Neha Gupta',
        image: work14,
        speciality: 'Electrician',
        skill: 'Appliance Repair',
        experience: '3 Years',
        about: 'Neha is an electrician who handles appliance repairs like fans, lights, and switches with quick solutions.',
        fees: 450,
        address: {
            line1: 'Hazaratganj',
            line2: 'Lucknow, India'
        }
    },
    {
        _id: 'work15',
        name: 'Rohit Das',
        image: work15,
        speciality: 'Painter',
        skill: 'Wall Putty & Finishing',
        experience: '1 Year',
        about: 'Rohit is a young painter specializing in wall putty work and neat finishing for interiors.',
        fees: 250,
        address: {
            line1: 'Silchar',
            line2: 'Assam, India'
        }
    },
]
