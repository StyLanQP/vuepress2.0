# Controlling devices

## Viewing tasks

You can search commands by entering device serial number, device alias or command alias. You can also filter the commands by selecting a specific time, the result will show a command list where the specific time is between the start time and the end time of the commands. The platform also provides a command status filter. Check the **<u>Favorite</u>** icon, the result will show the favorite command list.

Select a specific command, its detail is shown in the bottom section as shown below:

Enter the Device tab to view detailed device command execution results.

## Adding tasks

Click the **<u>+ Add Command</u>** button on the top right side, an Add Command window will pop up.

There are three steps need to be done totally to add a new command:

- First Step: Command and Device

  Please enter a command alias, write a description and select devices which are required to execute the command. You can search a device by entering at least one digit of its serial number. A filter of model name, group name and status is also provided to select specific devices.

  If a selected device needs to be excluded, click the **<u>Delete</u>** button on the right side of the device to remove it from the selected device list.

  By clicking the **<u>Clear All</u>** button, all of the selected devices will be removed from the selected device list.

  After filling in the form in the first step, click the **<u>Next</u>** button to go to the second step.


- Second Step: Configuration

  There is a selected device list for you to assure device selection. After the confirmation, you can select one of the common supported command types to illustrate which type of command is desired to execute. Only one type of command can be chosen. Hover the mouse on the **<u>Information</u>** icon on the top right of the command type button to read its description. Let's select the `restart` type of command for example as shown below:

  After finishing the selection, click the **<u>Next</u>** button to go to the third step.

- Third Step: Parameter and Strategy

  Fill in the form and click the **<u>Add</u>** button to add a new command. For Execute Strategy, you can choose multiple status, signal strength range and battery condition to determine which devices are required to execute the command. The command can be set to be executed immediately or on schedule by selecting a fixed time. For Retry Strategy, timeout, retry times and retry interval can be configured. *Please note: The value of Timeout means the total execution timeout, that is, if the command exceeds timeout, the command will be marked as `Failed`. All retries are processed within the duration of timeout.*

## Retrying tasks

### Single retrying

To retry a specific device command, you can also select a command, enter the Device tab, select the desired device and then click the **<u>Retry</u>** button.

### Batch retrying

Select a command and then click the **<u>Retry</u>** button to retry the execution of the specific command.

## Canceling tasks

### Single canceling

To cancel a specific device command, you can also select a command, enter the Device tab, select the desired device and then click the **<u>Cancel</u>** button.

### Batch canceling

Select a command and then click the **<u>Cancel</u>** button to cancel the execution of the specific command.