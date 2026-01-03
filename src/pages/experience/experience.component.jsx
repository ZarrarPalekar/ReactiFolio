import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./experience.styles.css";
import { myExperience } from "../../data/myExperience";
import useWindowDimensions from "../../functionality/checkViewPort";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TiltWrapper from "../../components/tilt-wrapper/TiltWrapper";

import WorkIcon from "@mui/icons-material/Work";

// Helper function to parse date strings like "Oct 2022" to ISO format
function parseMonthYear(dateStr) {
  const monthMap = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const parts = dateStr.trim().split(" ");
  if (parts.length !== 2) {
    console.error("Invalid date format:", dateStr);
    return null;
  }

  const month = monthMap[parts[0]];
  const year = parts[1];

  if (!month || !year) {
    console.error("Could not parse date:", dateStr);
    return null;
  }

  // Return ISO format: YYYY-MM-DD
  return `${year}-${month}-01`;
}

// Function to calculate the difference in years and months
export function diff_months(date1, date2) {
  try {
    // Ensure we have valid date objects
    const d1 = date1 instanceof Date ? date1 : new Date(date1);
    const d2 = date2 instanceof Date ? date2 : new Date(date2);

    // Check if dates are valid
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
      console.error("Invalid dates:", date1, date2);
      return { years: 0, months: 0 };
    }

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    console.log("Calculated duration:", { years, months });
    return { years, months };
  } catch (error) {
    console.error("Error calculating date difference:", error);
    return { years: 0, months: 0 };
  }
}

// Function to convert the difference into words
export function getWords(duration) {
  try {
    if (!duration || typeof duration !== "object") {
      console.error("Invalid duration object:", duration);
      return "";
    }

    const { years, months } = duration;
    let words = "";

    if (years > 0) {
      words += `${years} year${years > 1 ? "s" : ""}`;
    }

    if (months > 0) {
      if (years > 0) {
        words += " and ";
      }
      words += `${months} month${months > 1 ? "s" : ""}`;
    }

    console.log("getWords result:", words);
    return words || "Less than a month";
  } catch (error) {
    console.error("Error in getWords:", error);
    return "";
  }
}

export function getWordsWithoutMonths(duration) {
  try {
    if (!duration || typeof duration !== "object") {
      console.error("Invalid duration object:", duration);
      return "";
    }

    function getPlural(number, word) {
      return (number === 1 && word.one) || word.other;
    }

    var years = { one: "year", other: "years" },
      y = duration.years,
      result = [];

    if (y && y > 0) {
      result.push(y + " " + getPlural(y, years));
    }

    const resultString = result.join(" and ");
    console.log("getWordsWithoutMonths result:", resultString);
    return resultString;
  } catch (error) {
    console.error("Error in getWordsWithoutMonths:", error);
    return "";
  }
}

// console.log(getWords(27));

const Experience = () => {
  const { width } = useWindowDimensions();
  return (
    <div id="experience" className="experience-section">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {myExperience.map((exp) => {
        return width > 768 ? (
          <div className="jumbo-style p-4 mb-4" key={Math.random()}>
            <Container>
              <TiltWrapper options={{ max: 25 }}>
                <Card>
                  <Card.Header
                    as="h5"
                    className="d-flex justify-content-center flex-wrap"
                  >
                    <a
                      href={exp.companyURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Img
                        variant="top"
                        className="img-resize"
                        src={require(`../../assets/img/experience/${exp.image}`)}
                        alt="TI logo"
                      />
                    </a>
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <Card.Title className="text-center">
                        {exp.companyName}
                      </Card.Title>
                    </div>
                    <div>
                      <Card.Title className="text-center">
                        {exp.profile}
                      </Card.Title>
                    </div>
                    <div>
                      <Card.Text className="text-center style">
                        <strong className="body-title-style ">
                          {exp.subProfile}
                        </strong>
                        <br />
                        <br />
                        <div className="ml-0">
                          <div>
                            <strong>Technology:</strong> {exp.technology}
                          </div>
                          <div>
                            <strong>Period:</strong> {exp.duration}
                          </div>
                          <div>
                            {getWords(
                              diff_months(
                                new Date(exp.duration.split(" - ")[0]),
                                new Date(Date.now())
                              )
                            ) !== "" && (
                              <>
                                <strong>Duration:</strong>{" "}
                                {exp.duration.includes("Till Now")
                                  ? getWords(
                                      diff_months(
                                        new Date(exp.duration.split(" - ")[0]),
                                        new Date(Date.now())
                                      )
                                    )
                                  : getWords(
                                      diff_months(
                                        new Date(exp.duration.split(" - ")[0]),
                                        new Date(exp.duration.split(" - ")[1])
                                      )
                                    )}{" "}
                              </>
                            )}
                          </div>
                          <br />
                          <div>
                            <strong>Description: </strong>
                          </div>
                        </div>

                        <ul className="text-left">
                          {exp.description.desc1 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc1,
                              }}
                            ></li>
                          )}
                          {exp.description.desc2 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc2,
                              }}
                            ></li>
                          )}
                          {exp.description.desc3 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc3,
                              }}
                            ></li>
                          )}
                          {exp.description.desc4 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc4,
                              }}
                            ></li>
                          )}
                          {exp.description.desc5 && (
                            <li
                              dangerouslySetInnerHTML={{
                                __html: exp.description.desc5,
                              }}
                            ></li>
                          )}
                        </ul>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </TiltWrapper>
            </Container>
          </div>
        ) : (
          <VerticalTimeline>
            <VerticalTimelineElement
              key={Math.random()}
              className="vertical-timeline-element--work"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
              date={exp.duration}
              dateClassName="mr-2 ml-1 font-weight-bold"
            >
              <a
                href={exp.companyURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={require(`../../assets/img/experience/${exp.image}`)}
                  alt={exp.image}
                />
              </a>
              <h2
                className="vertical-timeline-element-title mt-3"
                style={{
                  color: "var(--color-white)",
                  WebkitTextFillColor: "var(--color-white)",
                  background: "none",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                {exp.companyName}
              </h2>
              <h3
                className="vertical-timeline-element-title mt-3"
                style={{
                  color: "var(--color-white)",
                  WebkitTextFillColor: "var(--color-white)",
                  background: "none",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                {exp.profile}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle mt-3"
                style={{
                  color: "var(--color-white)",
                  WebkitTextFillColor: "var(--color-white)",
                  background: "none",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                {exp.subProfile}
              </h4>
              <h6
                className="vertical-timeline-element-subtitle mt-3 ml-1"
                style={{
                  color: "var(--color-white)",
                  WebkitTextFillColor: "var(--color-white)",
                  background: "none",
                  opacity: 1,
                  visibility: "visible",
                  display: "block",
                }}
              >
                {(() => {
                  const startDateStr = exp.duration.split(" - ")[0];
                  const endDateStr = exp.duration.split(" - ")[1];

                  console.log("Duration string:", exp.duration);
                  console.log("Start date string:", startDateStr);
                  console.log("End date string:", endDateStr);

                  const startDateISO = parseMonthYear(startDateStr);
                  console.log("Start date ISO:", startDateISO);

                  if (!startDateISO) {
                    return "Duration unavailable";
                  }

                  if (exp.duration.includes("Till Now")) {
                    const result = getWords(
                      diff_months(new Date(startDateISO), new Date())
                    );
                    console.log("Duration result (Till Now):", result);
                    return result || "Ongoing";
                  } else {
                    const endDateISO = parseMonthYear(endDateStr);
                    console.log("End date ISO:", endDateISO);

                    if (!endDateISO) {
                      return "Duration unavailable";
                    }

                    const result = getWords(
                      diff_months(new Date(startDateISO), new Date(endDateISO))
                    );
                    console.log("Duration result:", result);
                    return result || "Less than a month";
                  }
                })()}
              </h6>
            </VerticalTimelineElement>
          </VerticalTimeline>
        );
      })}
    </div>
  );
};

export default Experience;
