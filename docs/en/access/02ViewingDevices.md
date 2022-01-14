# Viewing devices

For each device, this section shows the following information provided in columns:

| Column        | Description |
| ------------- | :---------- |
| Serial Number |             |
| Alias         |             |
| Model         |             |
| ......        |             |

## Viewing in table

### Editing device table headers

1、In the **Table** view, Click the **<u>Edit Headers</u>** button and an Edit Headers window will pop up.

2、You can select preferred headers to be displayed or hidden. Move the fields into Displayed Header List or Hidden Header List section by clicking the **<u>Select</u>** button.

3、You can also customize the orders of the headers by dragging the buttons on the right.

4、After you finished the edition, click the **<u>Submit</u>** button to apply the changes.

### Batch editing device information

The Platform provides two ways to edit devices in batch as follows:

- By selection (For small batch of no more than 100 devices and with only minor changes on device information):

  To have larger selection, the page size need to be configured. Then you can select these specific devices in one page, click the **<u>Action</u>** button and then click the **<u>Edit</u>** button, a Batch Edit Device Info window will pop up.

  After the edition, click the **<u>Submit</u>** button to save the changes to the selected devices. *Please note: The **<u>Modify</u>** checkbox need to be checked to apply the corresponding changes.*

- Via file (For larger batch of more than 100 devices or with major changes on device information):

  Simply click the **<u>Batch Edit Device Info</u>** button and a Batch Edit Device Info window will pop up. *Please note: Only added devices can be edited. Batch edit up to 5000 devices at a time.*

  By choosing `CSV` or `Excel` format and click the **<u>Download</u>** button, a corresponding device information edition template will ask to be downloaded (If you have downloaded the edition template already, you may skip this step).

  After downloading the device information edition template, you can fill in the form.

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

  Then click the **<u>Upload File</u>** button to select the file, and click the **<u>Import</u>** button to upload the file to batch edit device information. if some errors occurred during the edition, the error details will be displayed in the Import Log section. The edition will be terminated, and it does no impact on device list.

### Exporting devices

You can export devices by clicking the **<u>Export</u>** button on the top right. An Export window will pop up, then you can choose to get the Device List exported in `Excel` or `CSV` format.

## Viewing in list

### Searching devices

In the search box on the left, you can enter SN, Alias, ICCID, Attributes to find the device.

### Filtering devices

Click the **<u>Filters</u>** icon on the left to pop up the Filters window, select the model, group or status to filter the devices.

## Viewing in map

### Positioning devices

Map page provides the ability to locate the device.

You can set a targeting point on the map. So that it will display the map with the targeting point as the center every time after entering the Map view. Simply right click the place where you would like to set as the targeting point on the map, and click the **Targeting point setting** button, the specific place will be set as the targeting point.

### Viewing devices statistics data

A device list is on the right side to show device information for each device in the visible area, including alias, serial number, model name, PID, group name, locating type, detailed address and corresponding device data if configured. 

### Viewing devices specific data

By configuring a data field, the corresponding data will display in the list and also above the location points of devices. If the corresponding data has not been generated yet, it will display as "--".