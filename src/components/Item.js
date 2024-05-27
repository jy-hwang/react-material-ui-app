import { Favorite, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Item = () => {
  return (
    <Card sx={{ margin: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ backgroundColor: "secondary.main" }}>R</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="Shrimp And Chorizo Paella"
        subheader="May 27, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://res.cloudinary.com/jackie-cloudinary-app/image/upload/v1713699123/cld-sample-4.jpg"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Item;
