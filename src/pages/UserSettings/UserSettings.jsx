import { useState } from "react";

import Page from "../../components/common/Page/Page";
import SectionCard from "../../components/common/SectionCard";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Chip from "../../components/common/Chip";
import UserList from "../../components/common/UserList";

import users from "../../mock/users";

import "./UserSettings.css";

function UserSettings() {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <Page variant="form">
      <SectionCard
    label="USER SETTINGS"
    title="Master-detail permissions management"
    description="Manage user accounts, assign roles, and configure system access permissions across the platform."
    actions={
        <Button>
            Save User Changes
        </Button>
    }
>


        <div className="user-settings-grid">
          {/* Left Side */}
          <div className="user-settings-sidebar">
            <UserList
              users={users}
              selectedUser={selectedUser}
              onSelect={setSelectedUser}
            />
          </div>

          {/* Right Side */}
          <Card padding="large" className="user-details-card">

            <div className="user-form-grid">
              <Input
                label="Name"
                value={selectedUser.name}
              />

              <Input
                label="Network ID"
                value={selectedUser.networkId}
              />

              <Input
                label="Email"
                value={selectedUser.email}
              />

              <Input
                label="Phone"
                value={selectedUser.phone}
              />
            </div>

            <div className="user-role-list">
              <Chip variant="success">
                {selectedUser.status}
              </Chip>

              {selectedUser.roles.map((role) => (
                <Chip key={role}>
                  {role}
                </Chip>
              ))}
            </div>
          </Card>
        </div>
      </SectionCard>
    </Page>
  );
}

export default UserSettings;
