import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField, Button, IconButton, Divider, styled } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "64px 0 32px 0",
  position: "relative"
}));

const StyledSection = styled(Box)({
  marginBottom: "32px"
});

const StyledLink = styled(Typography)({
  cursor: "pointer",
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "&:hover": {
    color: "#60A5FA",
    transform: "translateX(5px)",
    transition: "all 0.3s ease"
  }
});

const ScrollTopButton = styled(IconButton)({
  position: "absolute",
  right: "24px",
  bottom: "24px",
  backgroundColor: "#60A5FA",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#3B82F6"
  }
});

const PropertyCard = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  gap: "16px",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)"
  }
});

const SocialButton = styled(IconButton)({
  color: "#ffffff",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  "&:hover": {
    backgroundColor: "#60A5FA",
    transform: "translateY(-3px)",
    transition: "all 0.3s ease"
  }
});


const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const latestProperties = [
    {
      id: 1,
      title: "Modern Beachfront Villa",
      image: "images.unsplash.com/photo-1512917774080-9991f1c4c750",
      price: "$3,500,000"
    },
    {
      id: 2,
      title: "Luxury Penthouse",
      image: "images.unsplash.com/photo-1600585154340-be6161a56a0c",
      price: "$2,850,000"
    },
    {
      id: 3,
      title: "Mountain View Cottage",
      image: "images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      price: "$1,250,000"
    }
  ];

  return (
    <StyledFooter component="footer" role="contentinfo">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <StyledSection>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", marginBottom: "24px" }}>
                About Us
              </Typography>
              <Typography className="text-white" variant="body2" sx={{ lineHeight: 1.8 }}>
                We are a premier real estate company dedicated to delivering exceptional property solutions. With over two decades of expertise, we transform your property aspirations into reality.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <StyledLink variant="body2" className="text-white">
                  <FaPhoneAlt /> +1 (555) 123-4567
                </StyledLink>
                <StyledLink variant="body2" className="text-white">
                  <FaEnvelope /> contact@realestate.com
                </StyledLink>
                <StyledLink variant="body2" className="text-white">
                  <FaMapMarkerAlt /> 123 Business Avenue, NY 10001
                </StyledLink>
              </Box>
            </StyledSection>
          </Grid>

          <Grid item xs={12} md={3}>
            <StyledSection>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", marginBottom: "24px" }}>
                Quick Links
              </Typography>
              <StyledLink variant="body2" className="text-white">Featured Properties</StyledLink>
              <StyledLink variant="body2" className="text-white">Rental Properties</StyledLink>
              <StyledLink variant="body2" className="text-white">Real Estate News</StyledLink>
              <StyledLink variant="body2" className="text-white">Investment Guide</StyledLink>
              <StyledLink variant="body2" className="text-white">Property Management</StyledLink>
              <StyledLink variant="body2" className="text-white">Contact Agents</StyledLink>
            </StyledSection>
          </Grid>

          <Grid item xs={12} md={3}>
            <StyledSection>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", marginBottom: "24px" }}>
                Featured Properties
              </Typography>
              {latestProperties.map((property) => (
                <PropertyCard key={property.id}>
                  <Box
                    component="img"
                    src={`https://${property.image}`}
                    alt={property.title}
                    sx={{
                      width: 100,
                      height: 70,
                      borderRadius: 2,
                      objectFit: "cover"
                    }}
                  />
                  <Box>
                    <Typography variant="body2" className="text-white" sx={{ fontWeight: "bold" }}>
                      {property.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#FF6922", fontWeight: "bold" }}>
                      {property.price}
                    </Typography>
                  </Box>
                </PropertyCard>
              ))}
            </StyledSection>
          </Grid>

          <Grid item xs={12} md={3}>
            <StyledSection>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", marginBottom: "24px" }}>
                Newsletter
              </Typography>
              <Typography variant="body2" className="text-white" sx={{ marginBottom: "16px" }}>
                Subscribe to our newsletter for exclusive property listings, market insights, and investment opportunities.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 1,
                    input: { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)"
                      },
                      "&:hover fieldset": {
                        borderColor: "#60A5FA"
                      }
                    }
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#27ae60",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#FF6922"
                    }
                  }}
                  onClick={handleSubscribe}
                >
                  Subscribe Now
                </Button>
              </Box>
            </StyledSection>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" className="text-white">
              © 2024 Premium Real Estate. All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <SocialButton aria-label="Facebook">
                <FaFacebook />
              </SocialButton>
              <SocialButton aria-label="Twitter">
                <FaTwitter />
              </SocialButton>
              <SocialButton aria-label="Instagram">
                <FaInstagram />
              </SocialButton>
              <SocialButton aria-label="LinkedIn">
                <FaLinkedin />
              </SocialButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <ScrollTopButton onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </ScrollTopButton>
    </StyledFooter>
  );
};

export default Footer;