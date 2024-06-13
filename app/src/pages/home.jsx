import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

const HeroSection = styled("div")(({ theme }) => ({
  height: "80vh",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  padding: theme.spacing(2),
  paddingTop: 0,
}));

const Section = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
  fontFamily:"cursive",
}));
const Feature = styled("div")(() => ({
  padding: 5,
  position: "relative",
  height: "100%",
  width: "100%",
  backgroundColor: "Menu",
  color: "black",
  borderRadius: 8,
  cursor: "pointer", // Add a pointer cursor for interactivity
  display: "flex",
  flexDirection: "column", // Enable horizontal layout for responsiveness
  alignItems: "center", // Center content vertically

  // Animations
  transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  animation: "move linear ease ", // Base shadow for hover effect

  "&:hover": {
    borderRadius: 10,
    transform: "scale(1.1)", // Subtle scale up on hover
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
  },
}));
const Featuretitle = styled("h6")(() => ({
  color: "#479ba1",
  fontWeight: "bolder",
  fontSize: "1.3rem",
  transition: "transform 0.6s ease-out, box-shadow 0.3s ease-out",

  "&:hover": {
    transform: "scale(1.10)",
    zIndex: 0,
    // Subtle scale up on hover
  },
}));
const FeatureCaption = styled("p")(() => ({
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  position: "absolute",
  top: 0,
  left: 0,
  marginBlock: 2,
  width: "100%",
  textAlign:"center",
  height: "96%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: 1,
  "&:hover": {
    color: "white",
    opacity: 1,
  },
}));

const Footer = styled("footer")(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.grey[800],
  color: "white",
}));

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <HeroSection>
          <Container>
            <Typography variant="h2" Faker>
              Welcome to Digital Recruitment
            </Typography>
            <Typography variant="h5" paragraph>
              Simplifying the hiring process for businesses and job seekers.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/dashboard"
              color="primary"
              size="large"
            >
              Get Started
            </Button>
          </Container>
        </HeroSection>
        <Section>
          <Container>
            <Typography variant="h4" py={3} gutterBottom>
              Features for Employers
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Advanced Matching Algorithms</Featuretitle>
                  <FeatureCaption>
                    Utilize AI to match candidates with job openings based on
                    skills, experience, and cultural fit.
                  </FeatureCaption>
                </Feature>
              </Grid>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Job Posting Management</Featuretitle>
                  <FeatureCaption>
                    Easily create, manage, and update job listings with detailed
                    descriptions and requirements.
                  </FeatureCaption>
                </Feature>
              </Grid>

              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Candidate Search and Filtering</Featuretitle>
                  <FeatureCaption>
                    Powerful search and filtering options to find candidates
                    based on specific criteria.
                  </FeatureCaption>
                </Feature>
              </Grid>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Automated Resume Screening</Featuretitle>
                  <FeatureCaption>
                    Automated tools to screen resumes and shortlist candidates,
                    saving time on initial screening.
                  </FeatureCaption>
                </Feature>
              </Grid>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Analytics and Reporting</Featuretitle>
                  <FeatureCaption>
                    Comprehensive analytics on job postings, candidate
                    applications, and hiring trends.
                  </FeatureCaption>
                </Feature>
              </Grid>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Collaborative Hiring</Featuretitle>
                  <FeatureCaption>
                    Tools for team collaboration, including sharing candidate
                    profiles and internal communication.
                  </FeatureCaption>
                </Feature>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Section>
          <Container>
            <Typography py={3} gutterBottom variant="h4" >
              Features for Job Seekers
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Personalized Job </Featuretitle>
                  <FeatureCaption>
                    AI-powered job recommendations based on your profile,
                    preferences, and search history.
                  </FeatureCaption>
                </Feature>
              </Grid>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Profile Creation and Management</Featuretitle>
                  <FeatureCaption>
                    Easily create and manage detailed profiles, including resume
                    uploads and skill assessments.
                  </FeatureCaption>
                </Feature>
              </Grid>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Job Alerts</Featuretitle>
                  <FeatureCaption>
                    Customizable job alerts via email or SMS based on your
                    preferences and search criteria.
                  </FeatureCaption>
                </Feature>
              </Grid>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Application Tracking</Featuretitle>
                  <FeatureCaption>
                    Tools to track the status of your job applications and
                    receive notifications for updates.
                  </FeatureCaption>
                </Feature>
              </Grid>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Skill Assessments and Training</Featuretitle>
                  <FeatureCaption>
                    Integrated skill assessments and recommendations for online
                    courses to enhance employability.
                  </FeatureCaption>
                </Feature>
              </Grid>
              <Grid item xs={12} md={4}>
                <Feature>
                  <Featuretitle>Resume Builder</Featuretitle>
                  <FeatureCaption>
                    User-friendly resume builder with templates and optimization
                    suggestions.
                  </FeatureCaption>
                </Feature>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Footer>
          <Container>
            <Typography gutterBottom>Digital Recruitment Solutions</Typography>
            <Typography variant="subtitle1" paragraph>
              Simplifying the hiring process for businesses and job seekers.
            </Typography>
            <Typography variant="body2" color="inherit">
              &copy; 2024 Digital Recruitment Solutions. All rights reserved.
            </Typography>
          </Container>
        </Footer>
      </div>
    </Fragment>
  );
};

export default Home;
