import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";

export default function AchievementList({ achievements }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = achievements.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === "All" || a.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container style={{ marginTop: "30px" }}>
      <h3 className="text-center mb-4">🏅 All Achievements</h3>

      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <Form.Control
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "250px" }}
        />
        <Form.Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ width: "180px" }}
        >
          <option>All</option>
          <option>Academic</option>
          <option>Sports</option>
          <option>Cultural</option>
          <option>Technical</option>
        </Form.Select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center">No matching achievements found.</p>
      ) : (
        filtered.map((a, i) => (
          <Card key={i} className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>{a.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {a.category}
              </Card.Subtitle>
              <Card.Text>{a.description}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
}
