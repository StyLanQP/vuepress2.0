<template><h1 id="controlling-devices" tabindex="-1"><a class="header-anchor" href="#controlling-devices" aria-hidden="true">#</a> Controlling devices</h1>
<h2 id="viewing-tasks" tabindex="-1"><a class="header-anchor" href="#viewing-tasks" aria-hidden="true">#</a> Viewing tasks</h2>
<p>You can search commands by entering device serial number, device alias or command alias. You can also filter the commands by selecting a specific time, the result will show a command list where the specific time is between the start time and the end time of the commands. The platform also provides a command status filter. Check the <strong><u>Favorite</u></strong> icon, the result will show the favorite command list.</p>
<p>Select a specific command, its detail is shown in the bottom section as shown below:</p>
<p>Enter the Device tab to view detailed device command execution results.</p>
<h2 id="adding-tasks" tabindex="-1"><a class="header-anchor" href="#adding-tasks" aria-hidden="true">#</a> Adding tasks</h2>
<p>Click the <strong><u>+ Add Command</u></strong> button on the top right side, an Add Command window will pop up.</p>
<p>There are three steps need to be done totally to add a new command:</p>
<ul>
<li>
<p>First Step: Command and Device</p>
<p>Please enter a command alias, write a description and select devices which are required to execute the command. You can search a device by entering at least one digit of its serial number. A filter of model name, group name and status is also provided to select specific devices.</p>
<p>If a selected device needs to be excluded, click the <strong><u>Delete</u></strong> button on the right side of the device to remove it from the selected device list.</p>
<p>By clicking the <strong><u>Clear All</u></strong> button, all of the selected devices will be removed from the selected device list.</p>
<p>After filling in the form in the first step, click the <strong><u>Next</u></strong> button to go to the second step.</p>
</li>
<li>
<p>Second Step: Configuration</p>
<p>There is a selected device list for you to assure device selection. After the confirmation, you can select one of the common supported command types to illustrate which type of command is desired to execute. Only one type of command can be chosen. Hover the mouse on the <strong><u>Information</u></strong> icon on the top right of the command type button to read its description. Let's select the <code>restart</code> type of command for example as shown below:</p>
<p>After finishing the selection, click the <strong><u>Next</u></strong> button to go to the third step.</p>
</li>
<li>
<p>Third Step: Parameter and Strategy</p>
<p>Fill in the form and click the <strong><u>Add</u></strong> button to add a new command. For Execute Strategy, you can choose multiple status, signal strength range and battery condition to determine which devices are required to execute the command. The command can be set to be executed immediately or on schedule by selecting a fixed time. For Retry Strategy, timeout, retry times and retry interval can be configured. <em>Please note: The value of Timeout means the total execution timeout, that is, if the command exceeds timeout, the command will be marked as <code>Failed</code>. All retries are processed within the duration of timeout.</em></p>
</li>
</ul>
<h2 id="retrying-tasks" tabindex="-1"><a class="header-anchor" href="#retrying-tasks" aria-hidden="true">#</a> Retrying tasks</h2>
<h3 id="single-retrying" tabindex="-1"><a class="header-anchor" href="#single-retrying" aria-hidden="true">#</a> Single retrying</h3>
<p>To retry a specific device command, you can also select a command, enter the Device tab, select the desired device and then click the <strong><u>Retry</u></strong> button.</p>
<h3 id="batch-retrying" tabindex="-1"><a class="header-anchor" href="#batch-retrying" aria-hidden="true">#</a> Batch retrying</h3>
<p>Select a command and then click the <strong><u>Retry</u></strong> button to retry the execution of the specific command.</p>
<h2 id="canceling-tasks" tabindex="-1"><a class="header-anchor" href="#canceling-tasks" aria-hidden="true">#</a> Canceling tasks</h2>
<h3 id="single-canceling" tabindex="-1"><a class="header-anchor" href="#single-canceling" aria-hidden="true">#</a> Single canceling</h3>
<p>To cancel a specific device command, you can also select a command, enter the Device tab, select the desired device and then click the <strong><u>Cancel</u></strong> button.</p>
<h3 id="batch-canceling" tabindex="-1"><a class="header-anchor" href="#batch-canceling" aria-hidden="true">#</a> Batch canceling</h3>
<p>Select a command and then click the <strong><u>Cancel</u></strong> button to cancel the execution of the specific command.</p>
</template>
