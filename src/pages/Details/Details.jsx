import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Details = ({ newsDetail }) => {
    const {image_url,title,details} = newsDetail;
  console.log(newsDetail);
  return (
    <Card className="mt-6 p-4">
      <CardBody>
       <img className="w-full" src={image_url} alt="" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
            <h2>{title}</h2>
        </Typography>
        <Typography>
         <p>
            {details}
         </p>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <NavLink to={'/'} className="inline-block">
        <Button size="sm" variant="text" className="flex items-center gap-2 bg-[#D72050] mt-10 text-white py-2 px-4">
          <FaArrowLeft></FaArrowLeft>
            All news in this category
          </Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
};
Details.propTypes ={
    newsDetail:PropTypes.object
}
export default Details;
