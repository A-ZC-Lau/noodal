CREATE TABLE systems (
    _id int PRIMARY KEY,
    title text,
    body text
);
CREATE INDEX index_systems_title ON systems (title);

CREATE TABLE components (
    _id int PRIMARY KEY,
    title text,
    body text
);
CREATE INDEX index_components_title ON components (title);

CREATE TABLE bugs (
    _id int PRIMARY KEY,
    title text,
    body text
);
CREATE INDEX index_bugs_title ON bugs (title);

CREATE TABLE systems_to_systems (
    origin_id int NOT NULL,
    destination_id int NOT NULL,

    FOREIGN KEY(origin_id)
        REFERENCES systems(_id)
            ON DELETE CASCADE,
    FOREIGN KEY(destination_id) 
        REFERENCES systems(_id)
            ON DELETE CASCADE
);
CREATE UNIQUE INDEX index_systems_to_systems_o_d
    ON systems_to_systems (origin_id, destination_id);
CREATE UNIQUE INDEX index_systems_to_systems_d_o
    ON systems_to_systems (destination_id, origin_id);

CREATE TABLE systems_to_components (
    origin_id int NOT NULL,
    destination_id int NOT NULL,

    FOREIGN KEY(origin_id)
        REFERENCES systems(_id)
            ON DELETE CASCADE,
    FOREIGN KEY(destination_id) 
        REFERENCES components(_id)
            ON DELETE CASCADE
);
CREATE UNIQUE INDEX index_systems_to_components_o_d
    ON systems_to_components (origin_id, destination_id);
CREATE UNIQUE INDEX index_systems_to_components_d_o
    ON systems_to_components (destination_id, origin_id);

CREATE TABLE components_to_bugs (
    origin_id int NOT NULL,
    destination_id int NOT NULL,

    FOREIGN KEY(origin_id)
        REFERENCES components(_id)
            ON DELETE CASCADE,
    FOREIGN KEY(destination_id) 
        REFERENCES bugs(_id)
            ON DELETE CASCADE
);
CREATE UNIQUE INDEX index_components_to_bugs_o_d
    ON components_to_bugs (origin_id, destination_id);
CREATE UNIQUE INDEX index_components_to_bugs_d_o
    ON components_to_bugs (destination_id, origin_id);

CREATE TABLE bug_labels (
    bug_id int NOT NULL,
    label text,

    FOREIGN KEY(bug_id)
        REFERENCES bugs(_id)
            ON DELETE CASCADE
);
CREATE INDEX index_bug_id
    ON bug_labels (bug_id);
CREATE INDEX index_bug_labels
    ON bug_labels (label);