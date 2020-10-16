import React, { memo } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

export interface Props {
    title: string;
    imageUrl: string;
    size?: string;
}

function MenuItem({ title, imageUrl, size }: Props) {
    const classes = useStyles();
    return (
    <Grid item xs={12} md={size? 6: 4}>
        <Card>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height={size? '340': '100%'}
                image={imageUrl}
                title="Contemplative Reptile"
            />
            <CardContent classes={{ root: classes.cardContentRoot}}>
                <Typography gutterBottom variant="h5" component="h2">
                {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    SHOP NOW
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    );
}

export default memo(MenuItem);