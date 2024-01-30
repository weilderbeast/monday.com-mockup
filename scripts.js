window.onload = function () {
  work_management();
  sales_crm();
  dev();
  tooltipInit();
  navbarShadow();
};

const list_selector = function (elements, bg_color, wrapper) {
  const default_border = "#c3c6d4";

  elements.forEach((elem) => {
    elem?.addEventListener("click", () => {
      const checkbox = elem.getElementsByTagName("input")[0];
      checkbox.checked = !checkbox.checked;
      elem.style.borderColor = checkbox.checked ? bg_color : default_border;
      wrapper.style.animation = "myAnim 0.75s ease 0s 1 normal forwards";
      setTimeout(() => {
        wrapper.style.animation = "";
      }, 1000);
    });
  });
};

const work_management = function () {
  const button = document.getElementById("get-started-button-1");

  const more_worflows = document.getElementById("more-workflows");
  const it = document.getElementById("it");
  const hr = document.getElementById("hr");
  const task_management = document.getElementById("task-management");
  const project_management = document.getElementById("project-management");
  const marketing = document.getElementById("marketing");
  const operations = document.getElementById("operations");
  const creative_design = document.getElementById("creative-design");

  const wrapper = document.getElementById("product-get-started-wrapper-1");

  const elements = [
    more_worflows,
    it,
    hr,
    task_management,
    project_management,
    marketing,
    operations,
    creative_design,
  ];
  const gradient = [];

  const gradient_colors = [
    `#6161FFee`,
    `#00C875ee`,
    `#ff7575ee`,
    `#579bfcee`,
    `#FF9900ee`,
    `#F04095ee`,
    `#FFCC00ee`,
    "#ff158aee",
  ];

  const default_border = "#c3c6d4";

  const buildGradient = (color) => {
    if (gradient.includes(color)) {
      gradient.splice(gradient.indexOf(color), 1);
      switch (gradient.length) {
        case 0:
          button.style.background = "#6161ff";
          break;
        case 1:
          button.style.background = gradient[0];
          break;
        default:
          button.style.background = `linear-gradient(to right, ${gradient.join(
            ","
          )})`;
      }
    } else {
      gradient.push(color);
      gradient.length === 1
        ? (button.style.background = color)
        : (button.style.background = `linear-gradient(to right, ${gradient.join(
            ","
          )})`);
    }
  };

  const buildBorder = function (elem, checked, index) {
    elem.style.borderColor = checked ? gradient_colors[index] : default_border;
  };

  elements.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      wrapper.style.animation = "myAnim 0.75s ease 0s 1 normal forwards";
      setTimeout(() => {
        wrapper.style.animation = "";
      }, 1000);

      buildGradient(gradient_colors[index]);
      const checkbox = elem.getElementsByTagName("input")[0];
      checkbox.checked = !checkbox.checked;
      buildBorder(elem, checkbox.checked, index);
    });
  });
};

const sales_crm = function () {
  const bg_color = "rgb(0, 210, 210)";

  const sales_pipeline = document.getElementById("sales-pipeline");
  const contact_management = document.getElementById("contact-management");
  const lead_management = document.getElementById("lead-management");
  const lead_capturing = document.getElementById("lead-capturing");
  const customer_projects = document.getElementById("customer-projects");
  const marketing_activities = document.getElementById("marketing-activities");
  const customer_onboarding = document.getElementById("customer-onboarding");
  const sales_other = document.getElementById("sales-other");

  const wrapper = document.getElementById("product-get-started-wrapper-2");

  const elements = [
    sales_pipeline,
    contact_management,
    lead_management,
    lead_capturing,
    customer_projects,
    marketing_activities,
    customer_onboarding,
    sales_other,
  ];

  list_selector(elements, bg_color, wrapper);
};

const dev = function () {
  const bg_color = "rgb(0, 202, 114)";

  const roadmap_planning = document.getElementById("roadmap-planning");
  const feature_backlog = document.getElementById("feature-backlog");
  const sprint_management = document.getElementById("sprint-management");
  const retrospectives = document.getElementById("retrospectives");
  const bug_tracking = document.getElementById("bug-tracking");
  const agile_projects = document.getElementById("agile-projects");
  const release_plan = document.getElementById("release-plan");
  const dev_other = document.getElementById("dev-other");

  const wrapper = document.getElementById("product-get-started-wrapper-3");

  const elements = [
    roadmap_planning,
    feature_backlog,
    sprint_management,
    retrospectives,
    bug_tracking,
    agile_projects,
    release_plan,
    dev_other,
  ];

  list_selector(elements, bg_color, wrapper);
};

const tooltipInit = function () {
  const tooltip_template = `
    <div class="language-popover d-flex flex-column flex-wrap">
    <div>English</div>
    <div>Español</div>
    <div>Français</div>
    <div>Deustch</div>
    <div>Português</div>
    <div>Nederlands</div>
    <div>Italiano</div>
    <div>Pусский</div>
    <div>日本語</div>
    <div>한국어</div>
    <div>Türkçe</div>
    <div>Svenska</div>
    <div>Polski</div>
    <div>繁體中文</div>
    </div>
    `;

  const language_selector = document.getElementById("language-selector");
  const custom_boundary = document.getElementsByClassName("footer")[0];
  new bootstrap.Tooltip(language_selector, {
    html: true,
    template: tooltip_template,
    title: "&nbsp;",
    trigger: "click",
    boundary: custom_boundary,
    placement: "top",
    offset: [85, 0],
  });

  var clicked = false;

  language_selector.addEventListener("click", () => {
    clicked = !clicked;
    const color = clicked ? "#6161ff" : "#535768";
    const orientation = clicked ? "rotate(180deg)" : "rotate(0deg)";
    language_selector.style.color = color;
    // ugly, ik
    language_selector.getElementsByTagName("path")[0].style.stroke = color;
    language_selector.getElementsByTagName("path")[1].style.stroke = color;
    language_selector.getElementsByTagName("path")[2].style.fill = color;
    language_selector.getElementsByTagName("svg")[1].style.transform =
      orientation;
  });
};

const navbarShadow = function () {
  const navbar = document.getElementById("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.style.boxShadow = "0px 4px 4px rgba(29, 140, 242, 0.08)";
    } else {
      navbar.style.boxShadow = "";
    }
  });
};
