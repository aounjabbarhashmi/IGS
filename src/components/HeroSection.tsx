import {
    Box,
    Button,
    Container,
    Typography,
    useMediaQuery,
    useTheme,
    Paper,
    Stack,
  } from "@mui/material";
  import bg from "../assets/star-bg.svg";
  import hero from "../assets/hero.svg";
  
  const features = [
    {
      title: "Accelerate long-term growth with IIGS's",
      description:
        "We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success.",
      link: "Let's Co-Create ›",
      linkColor: "#F06230",
    },
    {
      title: "Proactive, innovative, and results-focused",
      description:
        "We build impactful partnerships with global leaders. By teaming up, we fast-track success, spark innovation, and revolutionize global sourcing strategies.",
      link: "Call to explore global sourcing options ›",
      linkColor: "#F06230",
    },
    {
      title: "Driving success through strategic partnerships",
      description:
        "We collaborate to accelerate innovation, drive results, and transform your business globally by aligning expertise to meet your unique sourcing needs.",
      link: "Partner for Success ›",
      linkColor: "#F06230",
    },
  ];
  
  const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
    return (
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100dvh",
          color: "white",
          pt: { xs: 6, md: 10 },
          pb: { xs: 4, md: 8 },
        }}
      >
        <Container  sx={{
               maxWidth:"1800px !important",
                // paddingRight:"0px !important"
            }}>
          {/* Main Hero Layout */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
           
            alignItems="center"
            gap={6}
          >
            {/* Left */}
            <Box flex={1}>
              <Typography
                       
                variant="overline"
                     component="h1"
                textAlign={"left"}
                sx={{ color: "#ccc", letterSpacing: 2, width:"100%"}}
              >
                SMARTER, FASTER, AND MORE RELIABLE
              </Typography>
  
              <Typography
                variant="h4"
                textAlign={"left"}
                component="h1"
                sx={{
                  fontWeight: "bold",
                  mt: 1,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Streamline procurement and enhance your supply chain with IIGS
              </Typography>
  
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F06230",
                    color: "white",
                    fontWeight: "bold",
                    px: 3,
                    py: 1,
                    "&:hover": { backgroundColor: "#dd4a25" },
                  }}
                >
                  EXPLORE COST-EFFECTIVE SOURCING OPTIONS
                </Button>
                <Button variant="text" sx={{ color: "white", fontWeight: "bold" }}>
                  BOOK A MEETING
                </Button>
              </Stack>
            </Box>
  
            {/* Right */}
            <Box flex={1} textAlign="right">
              <img
                src={hero}
                alt="Robot holding globe"
                style={{
                  maxWidth: "100%",
                  height: isMobile ? "auto" : "450px",
                }}
              />
            </Box>
          </Box>
  
          {/* Feature Cards */}
          <Box
            mt={8}
            // pr={{md:5}}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={3}
          >
            {features.map((feature, index) => (
              <Paper
                key={index}
                sx={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(4px)",
                  p: 3,
                  borderRadius: 2,
                  color: "white",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom textAlign={"left"}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" gutterBottom textAlign={"left"}>
                  {feature.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: feature.linkColor,
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  textAlign={"left"}
                >
                  {feature.link}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default HeroSection;
  