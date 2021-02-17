const keys = require("../../config/keys");

module.exports = (survey) => {
  return `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>${survey.title}</h3>
                <p>Please answer the following question:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.domainURI}/feedback">Yes</a>
                </div>
                <div>
                    <a href="${keys.domainURI}/feedback ">No</a>
                </div>
            </div>
        </body>
    </html>
  `;
};
