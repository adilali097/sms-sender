const { exec } = require('child_process');

function sendSMS(phoneNumber, message) {
  const command = `termux-sms-send -n ${phoneNumber} "${message}"`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`SMS sent to ${phoneNumber}`);
  });
}

// Usage example
const phoneNumber = '1234567890';
const message = 'Hello, this is an automated SMS!';
sendSMS(phoneNumber, message);
