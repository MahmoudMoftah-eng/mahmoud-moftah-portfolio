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
  wide?: boolean;
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
    "An autonomous FPV quadrotor mission to approach, track and intercept a target aircraft in the TEKNOFEST 2026 competition context, using competition-server target data, onboard sensing and drone telemetry.",
  contributions: [
    "Led guidance architecture and flight-control logic for the autonomous mission.",
    "Implemented Pure Pursuit for target approach and Proportional Navigation for terminal interception behavior.",
    "Designed and tuned controller behavior, including altitude and vertical-velocity control and reference generation.",
    "Integrated guidance, control and telemetry; supported flight testing and flight-log analysis.",
  ],
  architecture: [
    "Competition-server target data, onboard sensing and drone telemetry inform state / target information for guidance.",
    "Guidance produces attitude and altitude references; cascaded control converts these into commands for the Betaflight interface.",
    "The mission / guidance-control execution architecture runs at approximately 50 Hz and uses Betaflight ANGLE mode.",
  ],
  testing: [
    "Built up validation through system integration checks and autonomous flight tests.",
    "Used flight-log analysis and MATLAB to identify vertical dynamics, review system response and guide controller tuning.",
    "Inspected telemetry and considered manual RC safety handover / override behavior during testing.",
  ],
  results: [
    "Implemented Pure Pursuit and Proportional Navigation guidance and connected their references to the flight-control architecture.",
    "Developed and tuned cascaded altitude / vertical-velocity control with practical signal and output constraints.",
    "Integrated telemetry, testing and flight-log analysis into the guidance and control workflow.",
  ],
  lessons: [
    "Guidance references, controller behavior and the flight-controller interface have to be designed as one chain.",
    "Flight logs and MATLAB analysis connect vertical-dynamics models to real aircraft behavior.",
    "Output limits and a clear manual handover path are part of a usable autonomous-flight design.",
  ],
};
const arm = {
  problem:
    "Develop a robot-arm position-control system that connects a real-time embedded controller to a motor and its drive electronics, with separate position and velocity control loops.",
  contributions: [
    "Led STM32 software architecture and peripheral configuration for the STM32F446RE.",
    "Designed an outer position loop and an inner motor-speed loop.",
    "Specified PWM motor commands, timer-driven execution and UART telemetry.",
    "Defined the firmware timing and interfaces alongside the team's pre-hardware Simulink evaluation.",
  ],
  architecture: [
    "Outer position loop: approximately 10 ms; generates the velocity reference.",
    "Inner velocity loop: approximately 1 ms; generates the motor-drive command.",
    "PWM output connects the STM32 firmware to the H-Bridge motor driver.",
  ],
  testing: [
    "The team's MATLAB / Simulink model evaluated the cascade PID structure before hardware testing.",
    "The report documents a hardware test and tuning plan, not completed hardware results.",
  ],
  results: [
    "Documented the timer-driven cascade-control design, PWM motor interface and UART telemetry plan.",
    "The report includes a pre-hardware Simulink model and simulated responses.",
    "Measured hardware settling time, overshoot and position error are not provided.",
  ],
  lessons: [
    "A control algorithm needs a predictable execution schedule on the microcontroller.",
    "Integral clamping and output limits are part of the documented cascade-control design.",
    "Simulation needs to be followed by hardware telemetry and testing before drawing performance conclusions.",
  ],
};
const yutpa = {
  problem:
    "Develop autonomous rotary-wing mission software that coordinates a companion computer and flight controller, from command validation and takeoff to generated waypoints and landing.",
  contributions: [
    "Developed pymavlink / MAVLink communication between the Raspberry Pi 5 mission computer and SpeedyBee F405 V4 flight controller over USB Type-C.",
    "Implemented flight-mode transitions, autonomous arming / takeoff sequencing, mission execution, return and landing logic.",
    "Added command validation and fault handling.",
    "Developed gorev1.py to generate a horizontal figure-8 mission dynamically from two GPS pole coordinates and perpendicular-vector geometry.",
  ],
  architecture: [
    "Raspberry Pi 5 mission computer running Python autonomous mission software.",
    "USB Type-C connection to a SpeedyBee F405 V4 flight controller running ArduPilot, using pymavlink / MAVLink.",
    "Mission Planner supports mission upload and monitoring, while GPS supplies navigation data.",
    "AUTO handles autonomous takeoff, uploaded mission execution, return and landing; GUIDED supports the target-alignment flow.",
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
      "Guidance, cascaded flight control and telemetry integration for an autonomous FPV quadrotor, with flight-log analysis guiding controller tuning.",
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
        title: "Project Overview",
        paragraphs: [
          "ABRA Hunter is an autonomous FPV quadrotor project for TEKNOFEST 2026. As Guidance & Control Lead, I worked across guidance, cascaded flight control, telemetry integration and real-flight validation. Flight logs and MATLAB analysis informed vertical-dynamics identification and controller tuning.",
        ],
      },
      { title: "Mission", paragraphs: [abra.problem] },
      {
        title: "My Responsibility",
        paragraphs: [
          "As Guidance & Control Lead, I was responsible for the guidance architecture, flight-control logic, controller design and tuning, system integration, flight testing and log analysis.",
        ],
        items: abra.contributions,
      },
      { title: "System Architecture", items: abra.architecture },
      {
        title: "Guidance System",
        paragraphs: [
          "Pure Pursuit supported target approach and pursuit behavior. Proportional Navigation supported the terminal interception phase. Both methods operated at the guidance layer: they generated reference commands for the controller layer rather than directly commanding motors.",
        ],
      },
      {
        title: "Flight Control",
        paragraphs: [
          "Guidance-generated attitude and altitude references fed the controller layer, which converted them into commands compatible with Betaflight ANGLE mode. Altitude and vertical-velocity behavior was modeled and tuned using flight data, flight-log analysis and MATLAB. This work complemented the Betaflight flight-control stack; it did not replace its low-level flight controller.",
        ],
        items: [
          "Cascade control for altitude and vertical-velocity behavior, with hover feed-forward and tilt compensation.",
          "Integral clamping (anti-windup) in the active altitude and vertical-velocity controller.",
          "Output limits and slew-rate limiting to bound command changes.",
        ],
      },
      {
        title: "System Integration",
        paragraphs: [
          "Integrated team-developed perception and state-estimation modules into the autonomous flight architecture. My contribution was integration with guidance, control and telemetry; I do not claim authorship of those perception or estimation algorithms.",
        ],
      },
      { title: "Testing & Validation", items: abra.testing },
      {
        title: "Engineering Challenges",
        paragraphs: [
          "The guidance output had to match the flight-control interface while the altitude loop accounted for vertical dynamics, tilt effects and bounded commands. Telemetry and flight logs were essential for interpreting real-aircraft behavior and tuning the integrated system. Safety handover also had to remain part of the autonomous-flight design.",
        ],
      },
      { title: "Key Outcomes", items: abra.results },
      { title: "What I Learned", items: abra.lessons },
    ],
    mediaDirectory: "abra",
    media: [
      {
        label: "ABRA Hunter platform during field testing.",
        kind: "image",
        src: "projects/abra/abra-aircraft-overview.jpg",
        alt: "ABRA Hunter UAV on the ground during field testing at sunset.",
      },
      {
        label:
          "System-level architecture of the ABRA Hunter autonomous flight stack. My work focused on guidance, control, system integration and flight testing; perception and state-estimation modules were developed collaboratively within the team.",
        kind: "image",
        src: "projects/abra/abra-system-architecture.svg",
        alt: "ABRA Hunter autonomous UAV system architecture showing camera vision, competition server target data and drone telemetry feeding guidance, followed by control reference, controllers, RC command and drone plant.",
        wide: true,
      },
      {
        label: "Verified active controller architecture from guidance references to the Betaflight ANGLE-mode RC interface.",
        kind: "image",
        src: "projects/abra/abra-controller-architecture.svg",
        alt: "ABRA Hunter active controller architecture showing Guidance and ControlReference splitting into an AngleModeAdapter path and a cascaded altitude and vertical-velocity path, then converging at RCCommand before SkyDaggerLink converts the commands to RC microseconds for Betaflight ANGLE mode.",
        wide: true,
      },
      {
        label: "Real flight-test response from the ABRA Hunter mission logs.",
        kind: "image",
        src: "projects/abra/abra-flight-response.png",
        alt: "Real ABRA flight-test mission response plot showing altitude reference versus measured altitude, vertical velocity reference versus measured vertical velocity, throttle behavior, and attitude reference and response.",
        wide: true,
      },
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
      "Timer-based cascade PID architecture for STM32F446RE, with L298N motor-drive design and pre-hardware Simulink evidence.",
    technologies: [
      "STM32F446RE",
      "Embedded C",
      "STM32 HAL",
      "MATLAB / Simulink",
      "PID",
      "PWM",
      "UART",
      "Timers / interrupts",
      "L298N",
    ],
    featured: true,
    diagram: "control",
    ...arm,
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "A robot-arm position-control design combining STM32 firmware architecture, cascaded control and L298N motor-drive electronics. I led the STM32 software architecture and peripheral configuration work documented in the early project report.",
        ],
      },
      { title: "Engineering Problem", paragraphs: [arm.problem] },
      { title: "Control Architecture", items: arm.architecture },
      {
        title: "Embedded Architecture",
        paragraphs: [
          "The STM32 HAL design assigns the 1 ms speed loop to TIM6 and the 10 ms position loop to TIM7. TIM1 provides PWM motor output, TIM3 reads the quadrature encoder, and UART is specified for telemetry and debugging.",
        ],
      },
      {
        title: "Electronics",
        paragraphs: [
          "The documented hardware design pairs the STM32F446RE with an L298N motor driver and quadrature encoder feedback. The cascaded position and velocity loops specify PWM and direction commands for the motor.",
        ],
      },
      {
        title: "Firmware Design",
        items: [
          "Specified separate position and speed loops on timer interrupts.",
          "Documented integral clamping for anti-windup in the cascade PID design.",
          "Defined PWM and direction output through the L298N motor driver.",
          "Configured the timer and peripheral architecture for encoder, PWM and UART interfaces.",
        ],
      },
        { title: "Simulation & Test Plan", items: arm.testing },
        { title: "Documented Outcomes", items: arm.results },
      { title: "What I Learned", items: arm.lessons },
    ],
    mediaDirectory: "robot-arm",
    media: [
      {
        label: "Cascade PID control architecture documented for the STM32F446RE implementation.",
        kind: "image",
        src: "projects/stm32-robot-arm/stm32-cascade-control.svg",
        alt: "STM32 robot arm cascade PID architecture with an outer position loop and inner speed loop controlling a DC motor through an L298N driver.",
        wide: true,
      },
      {
        label: "Pre-hardware cascade PID simulation used to evaluate the position-speed control structure.",
        kind: "image",
        src: "projects/stm32-robot-arm/stm32-simulink-response.png",
        alt: "Simulink cascade PID model and simulated response for the STM32 robot arm control system.",
        wide: true,
      },
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
      "SpeedyBee F405 V4",
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
          "Developed pymavlink / MAVLink communication between the Raspberry Pi 5 mission computer and the final SpeedyBee F405 V4 flight controller over USB Type-C. ArduPilot runs on the flight controller, and Mission Planner supports mission upload and vehicle monitoring. Pixhawk Cube Orange belonged only to the earlier pre-PSR design.",
        ],
      },
      {
        title: "Mission State Machine",
        paragraphs: [
          "AUTO handles autonomous takeoff, execution of the uploaded waypoint mission, return to the recorded launch position and landing. GUIDED is used separately in the target-alignment flow. Command validation and fault handling support the mode transitions and mission sequence.",
        ],
      },
      {
        title: "Dynamic Waypoint Generation",
        paragraphs: [
          "Mission 1 runs through gorev1.py. Two GPS pole coordinates define a pole-to-pole baseline; a perpendicular vector makes the horizontal figure-8 geometry independent of pole orientation. The generated waypoints are uploaded through MAVLink for two complete figure-8 loops, followed by return to the recorded launch position and landing.",
        ],
      },
      {
        title: "Simulation",
        paragraphs: [
          "Used ArduPilot SITL and simulation tools to develop and test mission software. Gazebo and Mission Planner were part of the workflow.",
        ],
      },
      { title: "Testing", items: yutpa.testing },
      { title: "Lessons Learned", items: yutpa.lessons },
    ],
    mediaDirectory: "yutpa",
    media: [
      {
        label: "YUTPA UAV during field testing.",
        kind: "image",
        src: "projects/yutpa/yutpa-field-test.jpg",
        alt: "YUTPA UAV on the ground during field testing.",
      },
      {
        label: "Verified Mission 1 geometry and AUTO sequence for the dynamically generated horizontal figure-8 route.",
        kind: "image",
        src: "projects/yutpa/yutpa-figure8-mission.svg",
        alt: "YUTPA Mission 1 diagram showing two GPS pole coordinates, their baseline, perpendicular-vector geometry, dynamically generated horizontal figure-8 waypoints, MAVLink mission upload, AUTO takeoff, two complete loops, return to launch and landing.",
        wide: true,
      },
      {
        label: "Final post-PSR YUTPA mission-computer, MAVLink and flight-controller architecture.",
        kind: "image",
        src: "projects/yutpa/yutpa-system-architecture.svg",
        alt: "YUTPA system architecture with Raspberry Pi 5 mission software connected over USB Type-C using pymavlink and MAVLink to a SpeedyBee F405 V4 running ArduPilot, with GPS navigation, Mission Planner upload and monitoring, AUTO mission execution, and GUIDED target alignment.",
        wide: true,
      },
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
    media: [],
  },
];
export const sectionId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
