export interface ProjectSectionData {
  title: string;
  paragraphs?: string[];
  items?: string[];
}
export interface ProjectMedia {
  label: string;
  kind: "image" | "video" | "document";
  src?: string;
  alt?: string;
}
export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  role: string;
  period: string;
  context: string;
  summary: string;
  technologies: string[];
  featured: boolean;
  heroImage?: string;
  diagram: "guidance" | "control" | "mission" | "simulation";
  problem: string;
  contributions: string[];
  architecture: string[];
  testing: string[];
  results: string[];
  lessons: string[];
  sections: ProjectSectionData[];
  media: ProjectMedia[];
  mediaDirectory: string;
  github?: string;
  video?: string;
}

const abra = {
  problem:
    "An autonomous FPV quadrotor system designed to approach, track and intercept a moving target aircraft in the TEKNOFEST competition context, using competition-server telemetry and onboard sensing.",
  contributions: [
    "Designed the mission and control architecture for autonomous flight phases.",
    "Implemented Pure Pursuit and Proportional Navigation guidance.",
    "Generated attitude and altitude references and integrated guidance with flight control and telemetry.",
    "Supported real flight testing, flight-log analysis and controller tuning.",
  ],
  architecture: [
    "Worked on an approximately 50 Hz guidance/control execution architecture.",
    "Connected mission logic, telemetry, guidance reference generation and cascaded flight-control logic.",
    "Used Betaflight ANGLE mode within the flight-control architecture.",
  ],
  testing: [
    "Used flight data to identify vertical dynamics and MATLAB to analyse system response and tune controllers.",
    "Supported real flight testing and reviewed flight logs to guide tuning and integration.",
    "Worked on manual RC safety handover and override concepts.",
  ],
  results: [
    "Implemented guidance algorithms and integrated reference generation into the autonomous stack.",
    "Developed and tuned cascaded control logic with practical actuator and signal constraints.",
    "Numerical flight-performance results are not yet included; verified plots and test records will be added.",
  ],
  lessons: [
    "Guidance reference generation, controller behaviour and telemetry need to be considered together.",
    "Flight-log analysis connects control models to the behaviour of real hardware.",
    "Manual handover and limiting behaviour belong in the control architecture from the start.",
  ],
};
const arm = {
  problem:
    "Develop a robot-arm position-control system that connects a real-time embedded controller to a motor and its drive electronics, with separate position and velocity control loops.",
  contributions: [
    "Led embedded software development on the STM32F446RE.",
    "Implemented an outer position loop and an inner motor-velocity loop.",
    "Integrated PWM motor commands, interrupt-driven execution and UART telemetry.",
    "Validated and tuned PID behaviour with MATLAB / Simulink and hardware testing.",
  ],
  architecture: [
    "Outer position loop: approximately 10 ms; generates the velocity reference.",
    "Inner velocity loop: approximately 1 ms; generates the motor-drive command.",
    "PWM output connects the STM32 firmware to the H-Bridge motor driver.",
  ],
  testing: [
    "Used MATLAB / Simulink for PID validation and tuning.",
    "Tuned the control system on hardware and used UART telemetry to inspect behaviour.",
    "Used ST-Link and a logic analyzer for hardware and firmware debugging.",
  ],
  results: [
    "Implemented timer-driven cascade control, PWM motor control and UART telemetry.",
    "Brought together embedded firmware, control engineering, electronics and hardware tuning.",
    "Measured settling time, overshoot and position error are not provided; no numerical performance claim is made.",
  ],
  lessons: [
    "A control algorithm needs a predictable execution schedule on the microcontroller.",
    "Saturation, motor dead-band and signal filtering affect practical controller behaviour.",
    "Simulation, telemetry and hardware debugging provide complementary views of the same system.",
  ],
};
const yutpa = {
  problem:
    "Develop autonomous rotary-wing mission software that coordinates a companion computer and flight controller, from command validation and takeoff to generated waypoints and landing.",
  contributions: [
    "Developed MAVLink communication between Pixhawk and the companion computer.",
    "Implemented flight-mode transitions, autonomous arming / takeoff sequencing and landing logic.",
    "Added command validation and fault handling.",
    "Developed dynamic waypoint generation, including an infinity-shaped trajectory from two GPS reference points.",
  ],
  architecture: [
    "Raspberry Pi 5 companion computer running Python mission software.",
    "MAVLink / pymavlink communication with a Pixhawk Cube Orange running ArduPilot.",
    "Mission waypoint generation and upload, with AUTO / GUIDED style autonomous mission flows.",
  ],
  testing: [
    "Tested software with ArduPilot SITL and simulation tools.",
    "Used Mission Planner and Gazebo in the simulation workflow.",
    "Integrated mission software with other UAV subsystems.",
  ],
  results: [
    "Implemented mission communication, sequencing and dynamic waypoint generation.",
    "Simulation-based testing supported the development workflow; a field-performance result is not claimed.",
  ],
  lessons: [
    "A mission command and its validation are separate responsibilities.",
    "State transitions and fault handling are as important as the nominal mission sequence.",
    "Simulation is useful for exercising mission software before working with flight hardware.",
  ],
};
const usv = {
  problem:
    "Provide a Gazebo simulation environment for an autonomous unmanned surface vehicle so robot models, simulated sensing and navigation workflows can be developed together.",
  contributions: [
    "Developed a Gazebo-based simulation environment for the YTG SANCAKTAR Student Team.",
    "Built and integrated robot models using URDF / XACRO.",
    "Worked with TF frames and integrated simulated sensors.",
    "Supported localization, autonomous navigation and SLAM-related simulation workflows.",
  ],
  architecture: [
    "Robot models defined using URDF / XACRO and integrated into Gazebo.",
    "ROS2 interfaces, TF frames and simulated sensors supporting the robotics software stack.",
  ],
  testing: [
    "Supported localization and autonomous navigation testing in simulation.",
    "Supported SLAM-related simulation workflows and sensor integration.",
  ],
  results: [
    "Contributed the simulation environment and robot-model integration used by the team.",
    "Part of the YTG SANCAKTAR team that received the TEKNOFEST “Best Software Team” award. This was a team achievement.",
  ],
  lessons: [
    "Robot models, coordinate frames and sensor interfaces need to agree for simulation to be useful.",
    "Simulation provides a shared environment for integrating and testing robotics software.",
  ],
};

export const projects: Project[] = [
  {
    slug: "abra-hunter",
    title: "ABRA Hunter — Autonomous Fighter UAV",
    shortTitle: "ABRA Hunter",
    category: "UAV · Guidance & Control",
    role: "Guidance & Control Lead",
    period: "TEKNOFEST 2026",
    context: "ABRA Student Team · Fighter UAV / Hunter Drone project",
    summary:
      "Guidance algorithms, cascaded flight control and system integration for an autonomous FPV quadrotor.",
    technologies: [
      "Python",
      "MATLAB",
      "Betaflight",
      "CRSF",
      "Pure Pursuit",
      "Proportional Navigation",
      "PID / Cascade Control",
      "UAV telemetry",
      "Flight-log analysis",
    ],
    featured: true,
    diagram: "guidance",
    ...abra,
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "ABRA Hunter combines guidance, flight control and system integration in an autonomous FPV quadrotor project for TEKNOFEST 2026. My work focused on guidance and control, with real flight testing informing the development process.",
        ],
      },
      { title: "Mission", paragraphs: [abra.problem] },
      {
        title: "My Role",
        paragraphs: [
          "As Guidance & Control Lead, my primary contribution was the guidance and flight-control architecture.",
        ],
        items: abra.contributions,
      },
      { title: "System Architecture", items: abra.architecture },
      {
        title: "Guidance Architecture",
        paragraphs: [
          "Implemented Pure Pursuit and Proportional Navigation guidance to generate references for the flight-control system. The guidance layer produced attitude and altitude references and connected to telemetry and the wider autonomous stack.",
        ],
      },
      {
        title: "Flight Control",
        paragraphs: [
          "Developed and tuned cascaded flight-control logic, including altitude PID and vertical-velocity control. Used flight data for vertical dynamics identification and MATLAB for analysis and tuning.",
        ],
        items: [
          "Hover feed-forward and tilt compensation.",
          "Anti-windup, filtering and output limiting.",
          "Slew-rate limiting and integration with Betaflight ANGLE mode.",
        ],
      },
      {
        title: "System Integration",
        paragraphs: [
          "Integrated team-developed perception and state-estimation modules into the autonomous flight architecture. My contribution was integration with guidance, control and telemetry; I do not claim authorship of those perception or estimation algorithms.",
        ],
      },
      { title: "Testing", items: abra.testing },
      { title: "Results / Engineering Outcomes", items: abra.results },
      {
        title: "Challenges",
        paragraphs: [
          "The engineering work brought together guidance references, vertical dynamics, bounded actuator commands and flight-controller behaviour. Integration and tuning needed to account for the real system as well as the control model.",
        ],
      },
      { title: "What I Learned", items: abra.lessons },
    ],
    mediaDirectory: "abra",
    media: [
      { label: "System architecture diagram", kind: "image" },
      { label: "Drone photographs", kind: "image" },
      { label: "Flight-test video", kind: "video" },
      { label: "MATLAB analysis graphs", kind: "image" },
      { label: "Flight logs", kind: "document" },
      { label: "Guidance diagrams", kind: "image" },
    ],
  },
  {
    slug: "stm32-robot-arm",
    title: "STM32 Robot Arm — Cascade PID Position Control",
    shortTitle: "STM32 Robot Arm",
    category: "Embedded · Motor Control",
    role: "Embedded Software Lead",
    period: "Engineering project",
    context: "STM32-based robot arm · Firmware, control and electronics",
    summary:
      "Real-time cascade PID control on STM32, connecting embedded firmware, drive electronics and hardware testing.",
    technologies: [
      "STM32F446RE",
      "Embedded C",
      "STM32 HAL",
      "MATLAB / Simulink",
      "PID",
      "PWM",
      "UART",
      "Timers / interrupts",
      "H-Bridge",
      "ST-Link",
      "Logic Analyzer",
    ],
    featured: true,
    diagram: "control",
    ...arm,
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "A robot-arm position-control project combining embedded firmware, control engineering, drive electronics and hardware testing. I led the embedded software implementation on the STM32F446RE.",
        ],
      },
      { title: "Engineering Problem", paragraphs: [arm.problem] },
      { title: "Control Architecture", items: arm.architecture },
      {
        title: "Embedded Architecture",
        paragraphs: [
          "Implemented the controller in Embedded C using STM32 HAL. Timer interrupts provided the execution schedule, PWM drove the motor-control output, and UART carried telemetry for inspection and tuning.",
        ],
      },
      {
        title: "Electronics",
        paragraphs: [
          "Electronics work included an H-Bridge implementation using an IR2110 gate driver and IRF540N MOSFETs, with a bootstrap circuit and flyback protection. This connected the firmware and control design to a physical motor-drive stage.",
        ],
      },
      {
        title: "Implementation",
        items: [
          "Implemented real-time cascade control with separate position and velocity loops.",
          "Applied anti-windup and derivative filtering.",
          "Used PWM dead-band handling and output limiting.",
          "Integrated timer interrupts, PWM output and UART telemetry.",
        ],
      },
      { title: "Testing & Tuning", items: arm.testing },
      { title: "Results", items: arm.results },
      { title: "What I Learned", items: arm.lessons },
    ],
    mediaDirectory: "robot-arm",
    media: [
      { label: "Cascade PID diagram", kind: "image" },
      { label: "STM32 architecture", kind: "image" },
      { label: "Simulink graph", kind: "image" },
      { label: "Hardware photograph", kind: "image" },
      { label: "PCB / wiring photographs", kind: "image" },
      { label: "UART telemetry graph", kind: "image" },
    ],
  },
  {
    slug: "yutpa-uav",
    title: "YUTPA Autonomous UAV",
    shortTitle: "YUTPA Autonomous UAV",
    category: "UAV · Mission Software",
    role: "Autonomous Flight Software Engineer",
    period: "TEKNOFEST 2026",
    context: "International Unmanned Aerial Vehicle Competition · Rotary Wing",
    summary:
      "MAVLink mission software, autonomous flight sequencing and dynamic waypoint generation for a rotary-wing UAV.",
    technologies: [
      "Python",
      "MAVLink",
      "pymavlink",
      "ArduPilot",
      "Pixhawk Cube Orange",
      "Raspberry Pi 5",
      "SITL",
      "Gazebo",
      "Mission Planner",
    ],
    featured: false,
    diagram: "mission",
    ...yutpa,
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Autonomous flight software for the YUTPA rotary-wing UAV, developed for the TEKNOFEST 2026 International Unmanned Aerial Vehicle Competition. My role focused on mission software and flight-controller integration.",
        ],
      },
      { title: "Mission", paragraphs: [yutpa.problem] },
      { title: "System Architecture", items: yutpa.architecture },
      {
        title: "MAVLink Communication",
        paragraphs: [
          "Developed Python communication between the companion computer and Pixhawk using MAVLink / pymavlink. The work included flight-mode transitions, command validation, fault handling, and generating and uploading mission waypoints.",
        ],
      },
      {
        title: "Mission State Machine",
        paragraphs: [
          "Implemented autonomous arming and takeoff sequencing, mission logic and landing logic. AUTO / GUIDED style flows coordinated the mission stages, with validation and fault handling around commands and transitions.",
        ],
      },
      {
        title: "Dynamic Waypoint Generation",
        paragraphs: [
          "Developed an infinity-shaped flight trajectory using geometry calculated from two GPS reference points. Generated the mission waypoints and uploaded them to support autonomous execution. The actual trajectory diagram is reserved in the project media below.",
        ],
      },
      {
        title: "Simulation",
        paragraphs: [
          "Used ArduPilot SITL and simulation tools to develop and test mission software. Gazebo and Mission Planner were part of the workflow. Simulation screenshots and mission records will be added as evidence.",
        ],
      },
      { title: "Testing", items: yutpa.testing },
      { title: "Lessons Learned", items: yutpa.lessons },
    ],
    mediaDirectory: "yutpa",
    media: [
      { label: "Infinity trajectory diagram", kind: "image" },
      { label: "Gazebo screenshot", kind: "image" },
      { label: "Mission Planner screenshot", kind: "image" },
      { label: "MAVLink architecture", kind: "image" },
      { label: "Flight video", kind: "video" },
    ],
  },
  {
    slug: "ros2-usv",
    title: "Autonomous Unmanned Surface Vehicle Simulation",
    shortTitle: "ROS2 / Gazebo USV",
    category: "Robotics · Simulation",
    role: "Simulation Engineer",
    period: "2024–2025",
    context: "YTG SANCAKTAR Student Team",
    summary:
      "Gazebo simulation, robot models and simulated sensors supporting autonomous surface-vehicle navigation workflows.",
    technologies: [
      "ROS2",
      "Gazebo",
      "URDF",
      "XACRO",
      "TF",
      "Robot simulation",
      "Simulated sensors",
      "Localization",
      "SLAM / navigation testing",
    ],
    featured: false,
    diagram: "simulation",
    ...usv,
    sections: [
      { title: "Overview", paragraphs: [usv.problem] },
      {
        title: "My Role",
        paragraphs: [
          "Simulation Engineer with the YTG SANCAKTAR Student Team, October 2024–June 2025.",
        ],
        items: usv.contributions,
      },
      { title: "Simulation Architecture", items: usv.architecture },
      {
        title: "Robot Models & Sensors",
        paragraphs: [
          "Built and integrated robot models using URDF / XACRO, worked with TF frames and integrated simulated sensors. This work supported the relationship between the simulated vehicle and the ROS2 software stack.",
        ],
      },
      { title: "Testing", items: usv.testing },
      { title: "Engineering Outcomes", items: usv.results },
      { title: "What I Learned", items: usv.lessons },
    ],
    mediaDirectory: "usv",
    media: [
      { label: "Gazebo environment screenshot", kind: "image" },
      { label: "Robot model and TF frames", kind: "image" },
      { label: "Simulation demonstration", kind: "video" },
    ],
  },
];
export const sectionId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
