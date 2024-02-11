const fetch = require('node-fetch');
const { writeFile, unlink } = require('fs').promises;
const AdmZip = require('adm-zip');
const tar = require('tar');

const { getDownloadObject } = require("./src/utils");


async function main() {
    try {
        const version = "nightly";
        const download = getDownloadObject(version);
        console.info(`Downloading Foundry '${version}' from: ${download.url}`);
        const response = await fetch(download.url);
        const buffer = await response.buffer();
        await writeFile(download.filename, buffer);

        console.debug(`Extracting ${download.filename}`);
        if (download.url.endsWith("zip")) {
            const zip = new AdmZip(download.filename);
            zip.extractAllTo("./bin", true);
        } else {
            tar.x({
                file: download.filename,
                cwd: "./bin",
                sync: true,
            });
        }

        // remove the downloaded file
        await unlink(download.filename);
    } catch (err) {
        console.error(err);
    }
}

main()

// module.exports = main;
//
// if (require.main === module) {
//     main();
// }