import * as React from "react";

import {theme} from "../App";
import {ThemeProvider} from "@mui/material/styles";

import ReactSplit, {SplitDirection} from "@devbookhq/splitter";

import Box from "@mui/material/Box";
import CodeEditor from "./Editor";
import "./MainApp.css";
import Terminal from "./Terminal";
import Gazebo from "./Gazebo";
import Typography from "@mui/material/Typography";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import {Button, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function MainApp() {
  return (
    <ThemeProvider theme={theme}>
      <Box width={"100%"} height={"100vh"}>
        <Box
          height={"50px"}
          bgcolor={"background.cloverAppBar"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Box display={"flex"} gap={"15px"} ml={"10px"}>
            <Tooltip title="Back to dashboard">
              <IconButton aria-label="exit" color="primary">
                <ExitToAppRoundedIcon sx={{transform: "rotate(180deg)"}} />
              </IconButton>
            </Tooltip>
            <Button size={"small"} startIcon={<SettingsRoundedIcon />}>
              Settings
            </Button>
            <Button size={"small"} startIcon={<ShareRoundedIcon />}>
              Share Template
            </Button>
          </Box>
          <Typography
            position={"absolute"}
            sx={{
              maxWidth: "400px",
              textAlign: "center",
              textOverflow: "ellipsis",
              color: "#b0b1b2",
              lineHeight: 1.2,
              left: "50%",
              transform: "translate(-50%, 0)",
              fontFamily:
                "system-ui, -apple-system, Segoe UI, Roboto, Cantarell, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
            }}>
            instance name
          </Typography>
          <Box display={"flex"} gap={"15px"} mr={"10px"}>
            <Button
              sx={{textTransform: "none", fontWeight: 400}}
              variant="outlined"
              startIcon={<SearchRoundedIcon />}
              size={"small"}>
              Search templates...
            </Button>
            <Tooltip title="Open user settings">
              <IconButton sx={{p: 0}}>
                <Avatar
                  sx={{
                    height: "32px",
                    width: "32px",
                    bgcolor: "primary.200",
                  }}>
                  U
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box width={"100%"} style={{height: "calc(100% - 50px)"}}>
          <ReactSplit
            minWidths={[60, 60, 60]}
            initialSizes={[20, 50, 40]}
            direction={SplitDirection.Horizontal}
            draggerClassName={"dragger"}
            gutterClassName={"gutter-horizontal"}>
            <Box height={"100%"} bgcolor={"background.cloverMain"}></Box>
            <Box height={"100%"} bgcolor={"#1e1e1e"}>
              <CodeEditor />
            </Box>
            <ReactSplit
              minHeights={[60, 60]}
              direction={SplitDirection.Vertical}
              draggerClassName={"dragger"}
              gutterClassName={"gutter-vertical"}>
              <Gazebo />
              <Terminal />
            </ReactSplit>
          </ReactSplit>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
