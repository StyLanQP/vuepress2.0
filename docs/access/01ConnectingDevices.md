# Connecting devices

## Adding custom model

You can add new custom models to apply MQTT devices. Click the **<u>+ Add Model</u>** button on the top right side, an Add Model window will pop up.Fill in the form to add a new custom model. You can also upload a device image of which size is smaller than 500 KB.

## Adding devices

### Adding single device

1、Go to **Devices**, click the **+ Add Device** button on the top right side.

2、An Add Device window will pop up, fill in the form and click the **Add** button to add a new device. For "SIM ICCID" field, users can choose to provide or not provide relevant information because the Platform will automatically collect this information. If the **Allow for connection after it has changed** checkbox is checked, the Platform is allowed to do additional updates after the SIM information is initially populated, such as replacing the SIM card. If not, the Platform will reject the connection to the device if you replace the SIM card after the information is initially populated. You can also assign a specific alias, add tags and custom attributes to the device.

### Importing devices

1、Click the **Import** button and an Import window will pop up. *Please note: Only new custom model devices can be imported. Import up to 5000 devices at a time.*

2、By choosing `CSV` or `Excel` format and click the **Download** button, a corresponding device information import template will ask to be downloaded (If you have downloaded the import template already, you may skip this step).

3、After downloading the device information import template, you can fill in the form.

These are fields in the template:

- "SerialNumber", "Group", "Model" are required fields:

  - SerialNumber: Unique identifier of the device.
  - Group: The group name to which the device belongs. A group must exist in the system first, and has a corresponding relationship with the model. If it is not, please add it to the system first.
  - Model: Model name of the device.

- The remaining fields are optional:

  - Alias: Must be 1-40 characters, special symbols only include "_" and "-".
  - SimICCID: Must be 20 digits.
  - SimAutoUpdate: "0" means non-automatic update, "1" means automatic. By default it is 1, and leaving it empty is also regarded as the same.
  - Description: No more than 256 characters.
  - Tags: Must be 1-50 characters, including the numbers 0-9, the letters a-z and A-Z, the characters "-", ".", "_", "@", "$" and blank space. The number of tags for a device does not exceed 20 tags and tags are separated by ",".
  - Attribute: The attribute is filled in by the header, such as "attribute:xx", which means adding an attribute whose name is xx. Must be 1-50 characters, including the numbers 0-9, the letters a-z and A-Z, the characters "-", ".", "_", "@", "$" and blank space.

- Example:

  | SerialNumber    | Alias      | Group     | Model | SimICCID | Description | Tags                 | Attribute.Address               |
  | --------------- | ---------- | --------- | ----- | -------- | ----------- | -------------------- | ------------------------------- |
  | 861901268000009 | tmx07_0009 | tmx07_20m | TMX07 |          | Device 1    | San Antonio, Atlanta | 9442 North Capital of Texas Hwy |
  | 801046031113285 | tmx08_3285 | tmx08_2h  | TMX08 |          | Device 2    | San Antonio, Atlanta | 9445 North Capital of Texas Hwy |
  | 801046031097369 | tmx08_7369 | tmx08_1h  | TMX08 |          | Device 3    | San Antonio, Atlanta | 9442 North Capital of Texas Hwy |

4、Finally, click the **Upload File** button to select the file, and click the **Import** button to upload the file to import the devices. if some errors occurred during the import, the error details will be displayed in the Import Log section. The import will be terminated, and it does no impact on device list.